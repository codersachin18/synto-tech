import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brush, Layers, Files } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Graphic Design Services | Synto Tech',
  description: 'Unique graphic design for your specific needs. From marketing materials and presentations to custom illustrations, our creative team is here to bring your ideas to life.',
  keywords: ['custom graphic design', 'graphic designer', 'marketing materials design', 'custom illustration'],
};

export default function CustomDesignsPage() {
  const services = [
    { icon: Layers, title: 'Marketing Materials', description: 'Brochures, flyers, business cards, and other print or digital assets.' },
    { icon: Files, title: 'Presentations & Docs', description: 'Professionally designed presentations and documents that stand out.' },
    { icon: Brush, title: 'Custom Illustrations', description: 'Unique illustrations to give your brand a distinct and creative edge.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Custom Designs
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Have a design need that doesn't fit in a box? We provide a wide range of custom graphic design services to bring your creative vision to life, whatever it may be.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a Custom Design</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/graphicdesign/600/400"
                alt="A designer sketching creative ideas in a notebook"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="graphic design tools"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Creative Capabilities</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              If you can imagine it, we can design it.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              No project is too big or too small. Let's talk about your design needs.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Tell Us Your Idea <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
