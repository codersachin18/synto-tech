import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { CONTACT_DETAILS, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | Synto Tech',
  description: 'Get in touch with Synto Tech for your next project or any inquiries. We are here to help.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question about our apps, a project idea, or just want to say hello, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h2 className="mb-6 font-headline text-2xl font-bold">Send us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                {CONTACT_DETAILS.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{detail.label}</h3>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-semibold">Follow Us</h3>
                <div className="mt-4 flex gap-4">
                  {SOCIAL_LINKS.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild>
                      <Link href={social.href} aria-label={social.name}>
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
