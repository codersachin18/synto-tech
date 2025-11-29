import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter, Target, UserPlus } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lead Generation Services | Synto Tech',
  description: 'Generate high-quality leads for your business with our proven lead generation strategies. We help you build a predictable sales pipeline through targeted campaigns and conversion optimization.',
  keywords: ['lead generation services', 'b2b lead generation', 'sales leads', 'lead generation company near me'],
};

export default function LeadGenerationPage() {
  const methods = [
    { icon: Filter, title: 'Targeted Campaigns', description: 'Reach your ideal customer profile with precision-targeted marketing campaigns.' },
    { icon: UserPlus, title: 'Conversion Optimization', description: 'Optimize your landing pages and funnels to convert more visitors into leads.' },
    { icon: Target, title: 'Quality over Quantity', description: 'We focus on generating high-intent, qualified leads that are more likely to convert.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Lead Generation
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill your sales pipeline with a steady stream of high-quality leads. We build and manage lead generation systems that fuel business growth.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Generating Leads</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/salesfunnel/600/400"
                alt="A sales funnel graphic showing leads being generated"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="lead generation funnel"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Lead Generation Methods</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A strategic mix of tactics to attract and capture potential customers.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {methods.map((method, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{method.title}</h3>
                <p className="mt-2 text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Stop waiting for customers to find you. Let's build a proactive lead generation engine for your business.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get More Leads <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
