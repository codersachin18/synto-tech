import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, PenTool, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logo Design Services | Professional & Custom Logos | Synto Tech',
  description: 'Get a professional, custom logo that perfectly represents your brand. Our design process ensures a unique and memorable logo for your business. Find a logo designer near you.',
  keywords: ['logo design', 'custom logo design', 'professional logo design', 'logo designer near me', 'branding services'],
};

export default function LogoDesignPage() {
  const process = [
    { icon: Award, title: 'Unique Concepts', description: 'We provide multiple unique logo concepts for you to choose from.' },
    { icon: PenTool, title: 'Unlimited Revisions', description: 'We refine your chosen concept until it\'s absolutely perfect.' },
    { icon: Eye, title: 'Full Brand Identity', description: 'We deliver a complete package with all the file formats you need for web and print.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Custom Logo Design
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your logo is the face of your brand. We create unique, memorable, and professional logos that make a lasting first impression.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Logo Design</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/logoconcept/600/400"
                alt="A collection of beautifully designed modern logos"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="logo design concepts"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Design Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A collaborative and creative process to craft the perfect logo for your brand.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {process.map((step, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for a New Look?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's create a logo that you and your customers will love.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get My Logo <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
