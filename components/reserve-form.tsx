"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ReserveForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mx-auto grid w-full max-w-2xl gap-5 sm:grid-cols-2"
    >
      <div className="sm:col-span-1">
        <Label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">Date</Label>
        <Input type="date" required className="bg-card/60" />
      </div>
      <div className="sm:col-span-1">
        <Label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">Guests</Label>
        <Input type="number" min={1} max={20} defaultValue={2} required className="bg-card/60" />
      </div>
      <div className="sm:col-span-1">
        <Label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</Label>
        <Input type="text" placeholder="Your name" required className="bg-card/60" />
      </div>
      <div className="sm:col-span-1">
        <Label className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">Phone</Label>
        <Input type="tel" placeholder="+382 …" required className="bg-card/60" />
      </div>
      <div className="sm:col-span-2 mt-2 text-center">
        <Button type="submit" variant="glow" size="lg" className="px-10 uppercase tracking-[0.18em]">
          {sent ? "Request Sent ✓" : "Request a Table"}
        </Button>
        {sent && (
          <p className="mt-4 text-sm text-muted-foreground">
            Thank you — our team will confirm your reservation shortly.
          </p>
        )}
      </div>
    </form>
  );
}
