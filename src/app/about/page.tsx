import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Heart } from 'lucide-react';
import {PlaceHolderImages} from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: 'About Us | Synto Tech',
  description: 'Learn about the story, mission, and vision of Synto Tech. We are passionate about creating innovative digital solutions.',
};

export default function AboutPage() {
    const aboutBannerImage = PlaceHolderImages.find(p => p.id === 'about-us-banner');

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses and individuals by creating intuitive, powerful, and reliable digital solutions that solve real-world problems and drive progress."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a globally recognized leader in technology innovation, known for our creativity, quality, and commitment to shaping a better digital future for everyone."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in collaboration, integrity, and relentless learning. We are passionate about our craft and dedicated to our clients' success."
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative h-60 md:h-80">
        {aboutBannerImage && (
             <Image
                src={aboutBannerImage.imageUrl}
                alt={aboutBannerImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutBannerImage.imageHint}
                priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Synto Tech
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Story</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded in 2020, Synto Tech began with a simple idea: technology should be beautiful, powerful, and accessible. What started as a small project among friends has grown into a dynamic company that has launched dozens of successful apps and partnered with businesses worldwide to bring their digital ambitions to life.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            {values.map((item, index) => (
              <div key={item.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
