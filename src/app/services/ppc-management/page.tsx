import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, HandCoins, Goal, Filter } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PPC Management Services | Synto Tech',
  description: 'Expert Pay-Per-Click (PPC) management services for Google Ads, Bing Ads, and more. We optimize your campaigns to reduce costs, increase conversions, and maximize your return on investment.',
  keywords: ['ppc management', 'ppc agency', 'google ads expert', 'pay per click services', 'search engine marketing'],
};

export default function PPCManagementPage() {
  const benefits = [
    { icon: HandCoins, title: 'Cost Efficiency', description: 'We fine-tune your campaigns to lower your cost-per-acquisition (CPA) and improve ad spend.' },
    { icon: Goal, title: 'Conversion Focused', description: 'Our strategies are built around driving meaningful actions, not just clicks.' },
    { icon: Filter, title: 'Advanced Targeting', description: 'We use advanced targeting methods to reach customers who are ready to buy.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                PPC Management
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Maximize your advertising ROI with our expert PPC management services. We handle every aspect of your campaigns, from keyword research to bid management and ad optimization.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Optimize Your PPC</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/ppcdashboard/600/400"
                alt="A dashboard showing PPC campaign metrics and charts"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="ppc charts"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our PPC Philosophy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We believe in a data-driven approach to paid search that focuses on continuous improvement and measurable results.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stop Wasting Your Ad Budget
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let our certified PPC experts take the guesswork out of paid advertising. Get a free campaign audit today.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get My Free Audit <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
