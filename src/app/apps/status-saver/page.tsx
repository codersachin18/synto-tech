import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Check, Share2, Shield, FileText } from 'lucide-react';
import {PlaceHolderImages} from "@/lib/placeholder-images";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Status Saver for WhatsApp | Download & Save Statuses Easily',
  description: 'The best app to download and save WhatsApp statuses. Save video and photo statuses from your contacts with one click. Fast, free, and user-friendly.',
};

export default function StatusSaverPage() {
    const featureImage = PlaceHolderImages.find(p => p.id === 'status-saver-feature');

  const features = [
    { icon: Download, text: 'One-click status download' },
    { icon: Check, text: 'High-quality video & photo saves' },
    { icon: Share2, text: 'Easily share or repost statuses' },
    { icon: Shield, text: 'Private and secure, no login needed' },
  ];

  const steps = [
    { number: '1', text: 'Open WhatsApp and view the desired status.' },
    { number: '2', text: 'Open Status Saver app.' },
    { number: '3', text: 'The status will appear. Tap to save or share!' },
  ];

  return (
    <div>
      <section className="bg-card py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:hidden mb-8">
            <div className="rounded-full bg-green-500 p-4 text-white">
                <FaWhatsapp className="h-12 w-12" />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Status Saver for WhatsApp
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Never lose a favorite moment again. Effortlessly save and manage your friends' WhatsApp statuses with a single tap.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Button size="lg" asChild>
                  <a href="https://github.com/codersachin18/status-saver-updates/releases/download/v2.1.0/Status-Saver-v2.1.0.apk">
                    <Download className="mr-2 h-5 w-5" />
                    Download for Android
                  </a>
                </Button>
                 <Button asChild variant="outline" size="lg">
                   <Link href="/apps/status-saver/privacy-policy">
                     <FileText className="mr-2 h-5 w-5" />
                     Privacy Policy
                   </Link>
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
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Key Features</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything you need in a status saver app.
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
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Saving statuses is as easy as 1, 2, 3.
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
