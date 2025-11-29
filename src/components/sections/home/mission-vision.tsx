import { Target, Eye } from "lucide-react";

export function MissionVision() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses and individuals by creating intuitive, powerful, and reliable digital solutions that solve real-world problems and drive progress."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a globally recognized leader in technology innovation, known for our creativity, quality, and commitment to shaping a better digital future for everyone."
    },
  ];

  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {values.map((item, index) => (
            <div key={item.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
