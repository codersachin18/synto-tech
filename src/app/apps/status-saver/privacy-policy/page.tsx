import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy for Status Saver | Synto Tech',
  description: 'Privacy Policy for the Status Saver for WhatsApp application provided by Synto Tech.',
  robots: {
    index: false, // Prevents search engines from indexing this page
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-fade-in bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/apps/status-saver">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to App Page
                </Link>
            </Button>
        </div>
        <article className="prose prose-lg mx-auto dark:prose-invert">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy for Status Saver
          </h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            Synto Tech ("us", "we", or "our") operates the Status Saver mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <p>
            We respect your privacy. Our Service is designed to work without collecting any personal information from you.
          </p>
          
          <h2>Information Collection and Use</h2>
          <p>
            Our Status Saver application does not collect, store, or transmit any personally identifiable information. The app's core function is to help you view and save WhatsApp statuses that are already available on your device's storage.
          </p>
          
          <h2>Permissions</h2>
          <p>
            For the app to function as intended, it requires the following permissions:
          </p>
          <ul>
            <li><strong>Storage Access (Read and Write):</strong> This permission is essential for the app to read the WhatsApp status files from your device's storage and to save them to your gallery upon your request. We do not access any other files on your device.</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            Since we do not collect any personal data, your information is not at risk from our end. All files are processed and stored locally on your device. We recommend you take standard security precautions to protect your device.
          </p>
          
          <h2>Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: <a href="mailto:privacy@syntotech.com">privacy@syntotech.com</a></li>
            <li>By visiting our contact page: <Link href="/contact">syntotech.com/contact</Link></li>
          </ul>
        </article>
      </div>
    </div>
  );
}
