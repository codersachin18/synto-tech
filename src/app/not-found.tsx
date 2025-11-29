'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {PlaceHolderImages} from "@/lib/placeholder-images";


export default function NotFound() {
  const notFoundImage = PlaceHolderImages.find(p => p.id === '404-image');

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-background py-16 text-center">
      <div className="container">
        {notFoundImage && (
            <Image
                src={notFoundImage.imageUrl}
                alt={notFoundImage.description}
                width={400}
                height={267}
                className="mx-auto mb-8 rounded-lg"
                data-ai-hint={notFoundImage.imageHint}
            />
        )}
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-primary sm:text-7xl">
          404
        </h1>
        <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops! The page you're looking for seems to have gotten lost in the digital cosmos.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}