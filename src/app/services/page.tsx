import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SERVICES_DATA } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Synto Tech',
  description: 'Explore the wide range of services offered by Synto Tech, including development, digital marketing, advertising, and graphic design.',
};

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              From crafting beautiful code to designing impactful marketing strategies, we provide a comprehensive suite of digital services to elevate your brand and drive growth.
            </p>
          </div>

          <div className="mt-20 space-y-16">
            {SERVICES_DATA.map((category, categoryIndex) => (
              <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-foreground">{category.name}</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${(serviceIndex * 0.05) + (categoryIndex * 0.1)}s` }}>
                      <Link href={service.href} className="group block h-full">
                        <Card className="h-full transform transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
                          <CardHeader>
                            <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                            <CardDescription>{service.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                             <div className="flex items-center text-sm font-medium text-primary group-hover:underline">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                             </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
