import Link from "next/link";
import { SERVICES_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function OurServices() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We provide a wide range of digital services to help your business grow.
          </p>
        </div>
        
        <div className="mt-16 space-y-16">
          {SERVICES_DATA.map((category, categoryIndex) => (
            <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-3xl font-bold text-foreground">{category.name}</h3>
              </div>
              <div className={cn(
                  "mt-8 grid justify-center gap-8",
                  category.name === "Digital Marketing" 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
                    "lg:max-w-4xl lg:mx-auto"
              )}>
                {category.services.map((service, serviceIndex) => {
                   const ServiceIcon = service.icon;
                   return (
                    <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${(serviceIndex * 0.05) + (categoryIndex * 0.1)}s` }}>
                      <Link href={service.href} className="group block h-full">
                        <Card className="h-full bg-gradient-to-br from-card to-muted/30 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                          <CardHeader className="flex-row items-center gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                <ServiceIcon className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-xl leading-tight">{service.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
