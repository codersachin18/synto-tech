import type { Metadata } from 'next';
import { AppCard } from '@/components/app-card';
import { apps } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Our Apps | Synto Tech',
  description: 'Browse the complete portfolio of apps and software solutions from Synto Tech.',
};

export default function AppsPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Our Application Suite
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A collection of tools crafted with passion, precision, and a purpose to serve you.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
