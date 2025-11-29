import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | Synto Tech',
  description: 'Grow your brand and engage your audience with our expert social media marketing services. We create data-driven strategies for platforms like Instagram, Facebook, and more. Find a social media marketer near you.',
  keywords: ['social media marketing', 'social media agency', 'smm services', 'facebook marketing', 'instagram marketing near me'],
};

export default function SocialMediaMarketingPage() {
  const benefits = [
    { icon: Users, title: 'Audience Growth', description: 'Expand your reach and connect with new potential customers.' },
    { icon: Heart, title: 'Brand Engagement', description: 'Build a loyal community around your brand with engaging content.' },
    { icon: TrendingUp, title: 'Drive Conversions', description: 'Turn followers into customers with strategic campaigns and funnels.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Social Media Marketing
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We help your brand shine on social media. From strategy and content creation to community management, we build and execute campaigns that deliver results.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Boost Your Social Presence</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/socialmediamarketing/600/400"
                alt="Collage of social media icons and engagement metrics on a screen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="social media marketing"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Why Social Media Matters</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A strong social media presence is key to building brand awareness and fostering customer loyalty.
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
              Ready to Grow Your Audience?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's create a social media strategy that works for you. Contact us for a free analysis of your social media presence.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Analysis <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
