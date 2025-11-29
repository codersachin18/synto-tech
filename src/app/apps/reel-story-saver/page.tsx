import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Film, Image as ImageIcon, Link2, Zap } from 'lucide-react';
import {PlaceHolderImages} from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'Reel & Story Saver for Instagram | Download Videos & Stories',
  description: 'The ultimate tool for downloading Instagram Reels, Stories, and IGTV videos. Fast, free, and easy to use. Save your favorite content for offline viewing.',
};

export default function ReelStorySaverPage() {
    const featureImage = PlaceHolderImages.find(p => p.id === 'reel-saver-feature');

  const features = [
    { icon: Film, text: 'Download Reels & IGTV' },
    { icon: ImageIcon, text: 'Save Photo & Video Stories' },
    { icon: Link2, text: 'Simple paste-link interface' },
    { icon: Zap, text: 'Fast and high-quality downloads' },
  ];

  const steps = [
    { number: '1', text: 'Find the Reel or Story you want to save on Instagram.' },
    { number: '2', text: 'Tap the three dots and select "Copy Link".' },
    { number: '3', text: 'Paste the link into Reel/Story Saver and tap Download.' },
  ];

  return (
    <div>
      <section className="bg-card py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Reel & Story Saver for Instagram
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your go-to solution for downloading any Instagram Reel or Story. Save content directly to your gallery, no login required.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary">
                  Coming Soon to iOS & Android
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
             {featureImage && (
                <Image
                    src={featureImage.imageUrl}
                    alt={featureImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                    data-ai-hint={featureImage.imageHint}
                />
            )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">App Features</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powerful, simple, and built for convenience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-medium text-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">3 Simple Steps</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get your favorite content saved in seconds.
            </p>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-4 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" aria-hidden="true"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative mb-8 flex flex-col items-center md:flex-row md:items-start">
                <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div className="mt-4 text-center md:ml-6 md:mt-1 md:text-left">
                  <p className="font-semibold text-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
