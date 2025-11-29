import { apps } from "@/lib/apps";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from 'react-icons/fa';

export function ExploreApps() {
  const popularApps = apps.filter(app => app.isPopular).slice(0, 4);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Apps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Discover a suite of applications designed to simplify your digital life.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {popularApps.map((app, index) => {
            const Icon = app.icon;
            
            return (
              <div
                key={app.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className={cn(
                    "h-full transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl text-white relative overflow-hidden",
                    app.id === 'status-saver' ? "bg-gradient-to-br from-green-500 to-teal-500" : "bg-gradient-to-br from-primary to-accent"
                )}>
                    <CardHeader className="flex flex-col items-center text-center">
                      <Link href={app.href} className="group block">
                        <div className="mb-4 rounded-2xl bg-white/20 p-4">
                            {Icon === FaWhatsapp ? (
                                <FaWhatsapp className="h-10 w-10" />
                            ) : typeof Icon === 'string' ? (
                            <Image src={Icon} alt={`${app.name} icon`} width={40} height={40} />
                            ) : (
                            <Icon className="h-10 w-10" />
                            )}
                        </div>
                      </Link>
                    </CardHeader>
                  <CardContent className="flex flex-col items-center text-center">
                      <Link href={app.href} className="group block">
                          <h3 className="font-headline text-lg font-semibold group-hover:underline">{app.name}</h3>
                          <p className="mt-2 text-sm text-white/80">{app.description}</p>
                      </Link>
                    <div className="mt-4 flex-grow"></div>
                    <Button asChild size="sm" className="mt-4 bg-white/90 text-primary hover:bg-white">
                      <a href={app.id === 'status-saver' ? "https://github.com/codersachin18/status-saver-updates/releases/download/v2.1.0/Status-Saver-v2.1.0.apk" : app.href}>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
