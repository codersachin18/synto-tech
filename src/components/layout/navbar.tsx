
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS, SERVICES_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {NAV_LINKS.filter(l => l.name === 'Home').map((link) => (
                <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                            {link.name}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                ))}
                 <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <div className="grid w-[1000px] grid-cols-4 gap-4 p-4">
                      {SERVICES_DATA.map((category) => (
                          <div key={category.name} className="flex flex-col">
                          <div className="mb-2 flex items-center gap-2">
                              <category.icon className="h-5 w-5 text-primary" />
                              <h3 className="font-headline text-sm font-semibold text-foreground">{category.name}</h3>
                          </div>
                          <ul className="flex flex-col gap-1">
                              {category.services.map((service) => (
                                <ListItem key={service.id} href={service.href} title={service.name}>
                                    {service.description}
                                </ListItem>
                              ))}
                          </ul>
                          </div>
                      ))}
                      </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {NAV_LINKS.filter(l => !['Home', 'Services'].includes(l.name)).map((link) => (
                <NavigationMenuItem key={link.href}>
                     <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                            {link.name}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                ))}
            </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto">
              <div className="p-4">
                <div className="mb-8">
                   <Logo />
                </div>
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.filter(l => l.name !== 'Services').map((link) => (
                     <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary py-2",
                         pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b-0">
                      <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {SERVICES_DATA.map((category) => (
                          <div key={category.name} className="mt-4">
                             <h3 className="flex items-center gap-2 font-headline text-md font-semibold text-foreground">
                               <category.icon className="h-5 w-5 text-primary" />
                               {category.name}
                             </h3>
                             <div className="mt-2 flex flex-col gap-2">
                              {category.services.map((service) => (
                                <Link key={service.id} href={service.href} className="text-muted-foreground hover:text-primary">
                                  {service.name}
                                </Link>
                              ))}
                             </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                 <Button asChild className="mt-8 w-full">
                    <Link href="/contact">Get a Quote</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

