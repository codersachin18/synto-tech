import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Image as ImageIcon, ThumbsUp, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Post Design Services | Synto Tech',
  description: 'Elevate your social media presence with stunning, custom-designed posts for Instagram, Facebook, and more. Our graphics are designed to stop the scroll and drive engagement.',
  keywords: ['social media design', 'instagram post design', 'facebook post design', 'graphic design for social media'],
};

export default function PostDesignPage() {
  const features = [
    { icon: ImageIcon, title: 'On-Brand Visuals', description: 'Designs that are consistent with your brand identity and style guide.' },
    { icon: ThumbsUp, title: 'Engagement-Focused', description: 'Graphics crafted to capture attention, encourage likes, comments, and shares.' },
    { icon: Sparkles, title: 'Custom Templates', description: 'We can create editable templates for your team to use for ongoing content.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Social Media Post Design
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Stop the scroll with beautiful, engaging graphics for your social media channels. We design eye-catching posts that get your message across and grow your following.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Posts Designed</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/socialpostdesign/600/400"
                alt="A grid of stylish social media posts on a phone screen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="social media post design"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Designs That Deliver</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our designs are more than just pretty pictures; they are strategic assets for your brand.
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
              Ready for a Feed Makeover?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Let's create a stunning and cohesive look for your social media.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Upgrade My Socials <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
