import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MonitorSmartphone, Rocket, LayoutTemplate } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Development Services | Synto Tech',
  description: 'Professional website development services. We create modern, responsive, and SEO-friendly websites that drive business growth. Looking for a web developer near you? Contact us today.',
  keywords: ['website development', 'web design', 'responsive web design', 'web developer near me', 'e-commerce website'],
};

export default function WebsiteDevelopmentPage() {
  const features = [
    { icon: MonitorSmartphone, title: 'Fully Responsive', description: 'Your website will look perfect on desktops, tablets, and smartphones.' },
    { icon: Rocket, title: 'Performance Optimized', description: 'Fast loading times for better user experience and SEO rankings.' },
    { icon: LayoutTemplate, title: 'Custom Designs', description: 'Unique, tailor-made designs that align with your brand identity.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Website Development
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We build beautiful, modern, and high-performance websites that captivate your audience and grow your business.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/modernwebsite/600/400"
                alt="Responsive website design shown on a laptop, tablet, and phone"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="modern website design"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">What We Offer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our websites are built with the latest technologies and best practices.
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

       <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Platform of Choice</h2>
             <p className="mt-4 text-lg text-muted-foreground">
              We specialize in building powerful web experiences with Next.js, the leading React framework for production. This allows us to create fast, scalable, and SEO-friendly websites.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for a New Website?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Whether you need a simple marketing site or a complex e-commerce platform, we can help.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get in Touch <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
