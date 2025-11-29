"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hyperspeed } from "@/components/hyperspeed";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40">
       <div className="absolute inset-0 -z-10">
        <Hyperspeed />
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="animate-fade-in-up font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">We Build Digital</span>
            <span className="hero-typing-animation-container block text-primary">
              Experiences
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg text-muted-foreground [animation-delay:0.2s] sm:text-xl">
            Synto Tech develops innovative apps, custom software, and modern web solutions to elevate your digital presence.
          </p>
          <div className="mt-10 flex animate-fade-in-up justify-center gap-4 [animation-delay:0.4s]">
            <Button size="lg" asChild>
              <Link href="/apps">Explore Our Apps</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
