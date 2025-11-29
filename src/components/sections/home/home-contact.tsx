import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeContact() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Have an Idea?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Let's build something amazing together. We're here to help turn your vision into a reality.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
