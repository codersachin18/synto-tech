import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle, BarChart2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Handling & Management Services | Synto Tech',
  description: 'Professional social media handling services. We manage your accounts, create content, engage with your community, and provide detailed reports, so you can focus on your business.',
  keywords: ['social media management', 'social media handling', 'content creation', 'community management', 'social media agency near me'],
};

export default function SocialMediaHandlingPage() {
  const services = [
    { icon: Calendar, title: 'Content Scheduling', description: 'Consistent and timely posting of high-quality, relevant content.' },
    { icon: MessageCircle, title: 'Community Engagement', description: 'Actively engaging with your audience by responding to comments and messages.' },
    { icon: BarChart2, title: 'Performance Reporting', description: 'Monthly reports detailing growth, engagement, and other key metrics.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Social Media Handling
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Let our experts manage your social media presence. We handle everything from content creation and scheduling to community engagement, freeing you up to run your business.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Management Quote</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/socialmanagement/600/400"
                alt="A content calendar being planned on a screen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="social media management"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">What Our Service Includes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A comprehensive service to manage and grow your social media accounts.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for Professional Management?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Save time and get better results from your social media efforts. Let's discuss a management plan that fits your needs.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Book a Consultation <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
