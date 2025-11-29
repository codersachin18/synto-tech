import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Target, LineChart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Services | Search Engine Optimization | Synto Tech',
  description: 'Boost your website\'s visibility on Google with our expert SEO services. We offer technical SEO, content strategy, and link building to rank higher and attract more customers. Find local SEO experts near you.',
  keywords: ['seo services', 'search engine optimization', 'seo company', 'local seo', 'seo expert near me'],
};

export default function SEOPage() {
  const strategies = [
    { icon: Search, title: 'Keyword Research', description: 'We identify the most valuable keywords to target your ideal customers.' },
    { icon: Target, title: 'On-Page & Technical SEO', description: 'Optimizing your site\'s structure and content for search engines.' },
    { icon: LineChart, title: 'Content & Link Building', description: 'Creating high-quality content and building authority through backlinks.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Search Engine Optimization (SEO)
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Climb the search engine rankings and drive organic traffic to your website. Our data-driven SEO strategies are designed to deliver long-term results.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Improve Your SEO Ranking</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/seochart/600/400"
                alt="Chart showing upward trend in SEO traffic and rankings"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="seo analytics chart"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our SEO Approach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A holistic approach to SEO that covers all the bases for sustainable growth.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {strategies.map((strategy, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <strategy.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{strategy.title}</h3>
                <p className="mt-2 text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Rank Higher?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get a free SEO audit and discover the opportunities you're missing. Let's get you to the top of Google.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get My Free SEO Audit <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
