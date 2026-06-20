# Multi-tenant site engine — standalone Next.js build, served as one container.
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV SITES_DIR=/app/sites
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# seed the volume mount point with the bundled sites on first run if empty
COPY --from=builder /app/data/sites /app/seed-sites
RUN mkdir -p /app/sites
EXPOSE 3000
CMD ["sh","-c","[ -z \"$(ls -A /app/sites 2>/dev/null)\" ] && cp -n /app/seed-sites/*.json /app/sites/ 2>/dev/null; node server.js"]
