import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Puzzle, BrainCircuit, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Solutions Development | Synto Tech',
  description: 'Tailored technology solutions for your unique business challenges. We specialize in developing custom integrations, automation, and specialized software to fit your specific needs.',
  keywords: ['custom solutions', 'tailored software', 'business automation', 'api integration', 'custom development'],
};

export default function CustomSolutionsPage() {
  const features = [
    { icon: Puzzle, title: 'API Integrations', description: 'Seamlessly connect your disparate systems and software for a unified workflow.' },
    { icon: BrainCircuit, title: 'Business Automation', description: 'Automate repetitive tasks and processes to save time and reduce errors.' },
    { icon: FlaskConical, title: 'Prototyping & MVP', description: 'Quickly build and test a minimum viable product to validate your idea.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Custom Technology Solutions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Off-the-shelf software doesn't always fit. We build tailored solutions that are designed specifically to solve your unique business problems and integrate perfectly with your existing workflow.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss Your Challenge</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/integration/600/400"
                alt="Abstract image of puzzle pieces fitting together to form a solution"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="api integration workflow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Solutions We Provide</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              No matter how niche your requirement is, we love a good challenge.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Have a Unique Problem?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We excel at finding creative solutions to complex problems. Let's talk about how we can build a custom solution for you.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Tell Us Your Needs <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
