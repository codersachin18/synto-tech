import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_DETAILS, COMPANY_NAME } from "@/lib/constants";
import { apps } from "@/lib/apps";

export function Footer() {
  const popularApps = apps.slice(0, 5);

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {COMPANY_NAME} develops innovative apps, custom software, and modern web solutions to elevate your digital presence.
            </p>
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary" aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Popular Apps</h3>
            <ul className="mt-4 space-y-2">
              {popularApps.map((app) => {
                 const Icon = app.icon;
                 return (
                  <li key={app.id}>
                    <Link href={app.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      {typeof Icon === 'string' ? (
                          <Image src={Icon} alt={`${app.name} icon`} width={16} height={16} className="h-4 w-4" />
                      ) : (
                          <Icon className="h-4 w-4" />
                      )}
                      <span>{app.name}</span>
                    </Link>
                  </li>
                 )
                })}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              {CONTACT_DETAILS.filter(d => d.label !== 'Address').map((detail) => (
                <li key={detail.label} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <detail.icon className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <a href={detail.label === 'Email' ? `mailto:${detail.value}` : `tel:${detail.value}`} className="hover:text-primary">
                    {detail.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
