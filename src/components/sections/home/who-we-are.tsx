import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {PlaceHolderImages} from "@/lib/placeholder-images";

export function WhoWeAre() {
  const whoWeAreImage = PlaceHolderImages.find(p => p.id === 'who-we-are-team');

  const solutions = [
    "Custom App Development",
    "Web & Software Solutions",
    "UI/UX Design",
    "Cloud Integration",
  ];

  return (
    <section className="overflow-hidden bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative animate-fade-in [animation-delay:0.2s]">
            {whoWeAreImage && (
                <Image
                    src={whoWeAreImage.imageUrl}
                    alt={whoWeAreImage.description}
                    width={800}
                    height={600}
                    className="rounded-xl shadow-2xl"
                    data-ai-hint={whoWeAreImage.imageHint}
                />
            )}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-xl border-4 border-primary/50"></div>
          </div>
          <div className="animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital products. We turn complex problems into elegant solutions that drive success and delight users.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
