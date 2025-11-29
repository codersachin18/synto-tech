import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brush, Lightbulb, BarChartHorizontal } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ad Creative Design Services | Synto Tech',
  description: 'Create high-performing ad creatives that stop the scroll and drive action. We design compelling visuals and write persuasive copy for your social media and PPC campaigns.',
  keywords: ['ad creative', 'ad design', 'facebook ad design', 'instagram ad creative', 'banner ad design'],
};

export default function AdCreativeDesignPage() {
  const principles = [
    { icon: Lightbulb, title: 'Strategy First', description: 'Every design starts with a clear understanding of the campaign goal and target audience.' },
    { icon: Brush, title: 'Visually Stunning', description: 'We create eye-catching visuals that are on-brand and optimized for each platform.' },
    { icon: BarChartHorizontal, title: 'Built to Convert', description: 'Our creatives are designed with a clear call-to-action to maximize conversions.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Ad Creative Design
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your ads are only as good as your creative. We design compelling visuals and persuasive copy that capture attention and drive results for your advertising campaigns.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Design My Ads</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/advertcreative/600/400"
                alt="A designer working on ad visuals on a computer"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="ad creative design"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Design Principles</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We combine creativity with data-driven insights to produce ad creatives that not only look good but also perform.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <principle.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{principle.title}</h3>
                <p className="mt-2 text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tired of Underperforming Ads?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Great creative can be the difference-maker. Let us design ad visuals that get you noticed and drive action.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Get Better Ad Creatives <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
