import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Tablet, Watch } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Synto Tech',
  description: 'Expert mobile app development for iOS and Android. We build native and cross-platform applications that are fast, engaging, and user-friendly. Contact us for app development services near you.',
  keywords: ['mobile app development', 'ios development', 'android development', 'react native', 'app developer near me'],
};

export default function AppDevelopmentPage() {
  const platforms = [
    { icon: Smartphone, title: 'iOS Development', description: 'Beautiful and high-performance native apps for the Apple ecosystem.' },
    { icon: Tablet, title: 'Android Development', description: 'Versatile and scalable native apps for the wide range of Android devices.' },
    { icon: Watch, title: 'Cross-Platform', description: 'Efficiently build for both iOS and Android from a single codebase with React Native.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Mobile App Development
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We create stunning, intuitive, and high-performing mobile applications for iOS and Android that your users will love.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your App Project</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/mobileappdev/600/400"
                alt="Mobile app interface on a smartphone screen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="mobile app development"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Platforms We Build For</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Targeting the right platforms to maximize your reach and impact.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {platforms.map((platform, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <platform.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{platform.title}</h3>
                <p className="mt-2 text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">From Idea to App Store</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our full-cycle development process includes strategy, design, development, testing, and deployment to ensure a successful launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Have an App Idea?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We're here to help you turn your vision into a successful mobile application. Let's talk about your idea.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Discuss Your App <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
