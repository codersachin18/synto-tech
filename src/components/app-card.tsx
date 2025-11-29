import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { App } from "@/lib/apps";
import { ArrowRight } from "lucide-react";

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const Icon = app.icon;
  return (
    <Link href={app.href} className="group block h-full">
      <Card className="h-full transform transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
        <CardHeader className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary">
            <Icon className="h-10 w-10" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <h3 className="font-headline text-lg font-semibold">{app.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{app.description}</p>
          <Button variant="ghost" size="sm" className="mt-4">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
