import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Synto Tech',
  description: 'Build powerful, scalable, and custom software solutions tailored to your business needs. We specialize in creating enterprise-grade applications that drive efficiency and growth. Contact us for software development services.',
  keywords: ['custom software development', 'software development company', 'enterprise software', 'software solutions', 'software developer near me'],
};

export default function SoftwareDevelopmentPage() {
  const benefits = [
    { icon: Layers, title: 'Scalable Architecture', description: 'We build software on robust, scalable architecture that grows with your business.' },
    { icon: Code, title: 'Clean & Maintainable Code', description: 'Our code is well-documented and follows best practices, ensuring long-term maintainability.' },
    { icon: Database, title: 'Secure & Reliable', description: 'Security and reliability are at the core of our development process, protecting your data and users.' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="relative bg-card py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Custom Software Development
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We design and build bespoke software applications that solve complex business challenges, streamline operations, and provide a competitive edge.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/softwarecoding/600/400"
                alt="Team collaborating on software development with code on screen"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="software development code"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Our Development Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A transparent and collaborative process to ensure your project's success from start to finish.
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

      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Technologies We Use</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage modern, powerful technologies to build high-performance applications.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="rounded-full bg-muted px-3 py-1 text-sm">React / Next.js</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">Node.js</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">Python</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">PostgreSQL</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">Docker</span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">AWS / GCP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Build Your Solution?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Let's discuss your project. We can help you find the best technology stack and development approach for your needs.
            </p>
            <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/contact">Schedule a Call <ArrowRight className="ml-2" /></Link>
            </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
