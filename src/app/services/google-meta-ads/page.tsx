import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, BarChart, BadgeDollarSign } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google & Meta Ads Management Services | Synto Tech',
  description: 'Drive targeted traffic and generate leads with our expert Google Ads and Meta (Facebook & Instagram) Ads management services. We create, manage, and optimize campaigns for maximum ROI.',
  keywords: ['google ads management', 'meta ads', 'facebook ads agency', 'ppc services', 'paid advertising near me'],
};

export default function AdsPage() {
  const benefits = [
    { icon: Target, title: 'Precise Targeting', description: 'Reach your exact audience based on demographics, interests, and behavior.' },
    { icon: BadgeDollarSign, title: 'Maximize ROI', description: 'We continuously optimize your campaigns to ensure the best return on your ad spend.' },
    { icon: BarChart, title: 'Data-Driven Results', description: 'Transparent reporting and analysis to track performance and make informed decisions.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Google & Meta Ads
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Get immediate, qualified traffic to your website with professionally managed Pay-Per-Click (PPC) campaigns on Google, Facebook, and Instagram.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Launch Your Ad Campaign</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/adsdashboard/600/400"
                alt="Digital advertising dashboard showing campaign performance graphs"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="digital ads dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Why Paid Advertising?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Paid ads offer immediate visibility and highly targeted reach to connect with customers actively looking for your services.
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
              Ready to See Results?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's create an advertising strategy that drives measurable results for your business.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get My Ad Strategy <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
