import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Compass, Brain, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Advertising Campaign Strategies | Synto Tech',
  description: 'Develop a winning advertising strategy with our expert campaign planning services. We help you define goals, identify target audiences, and create a cohesive plan for maximum impact.',
  keywords: ['advertising strategy', 'campaign planning', 'marketing campaign', 'ad campaign strategy'],
};

export default function CampaignStrategiesPage() {
  const pillars = [
    { icon: Compass, title: 'Goal Definition', description: 'We start by understanding your business objectives to set clear, measurable campaign goals.' },
    { icon: Brain, title: 'Audience Insights', description: 'In-depth research to understand your target audience and how to best reach them.' },
    { icon: ClipboardCheck, title: 'Execution & Analysis', description: 'We execute the plan and continually analyze performance to optimize for success.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Ad Campaign Strategies
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A great campaign starts with a great strategy. We develop data-driven advertising strategies that align with your business goals and deliver a strong return on investment.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Build Your Strategy</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/strategyboard/600/400"
                alt="A person drawing a marketing strategy on a whiteboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="campaign strategy whiteboard"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Strategic Pillars</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A solid foundation is crucial for any successful campaign.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Plan for Success?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Don't waste your ad spend. Let's build a smart, effective campaign strategy together.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get a Strategic Plan <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
