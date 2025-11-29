import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Star, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google Business Profile Setup & Optimization | Synto Tech',
  description: 'Dominate local search with a fully optimized Google Business Profile. We offer professional setup and management services to boost your visibility, attract local customers, and manage reviews.',
  keywords: ['google business profile', 'google my business', 'local seo services', 'gmb optimization', 'local business marketing'],
};

export default function GoogleBusinessPage() {
  const features = [
    { icon: MapPin, title: 'Boost Local Visibility', description: 'Appear in Google Maps and local search results when customers are looking for you.' },
    { icon: Star, title: 'Manage Your Reputation', description: 'Showcase your best reviews and professionally manage customer feedback.' },
    { icon: MessageSquare, title: 'Engage With Customers', description: 'Enable direct messaging, post updates, and answer questions to connect with your audience.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Google Business Profile Setup
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Attract more local customers with a professionally optimized Google Business Profile. We'll set up and manage your profile to maximize your visibility in local search.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Optimize My Profile</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/localseo/600/400"
                alt="A phone showing a Google Business Profile on a map interface"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="google business maps"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">The Power of Local Search</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Your Google Business Profile is often the first interaction a customer has with your business. Make it count.
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
              Get Found by Local Customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let us handle your Google Business Profile so you can focus on running your business.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Start My GMB Setup <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
