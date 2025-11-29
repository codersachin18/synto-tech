import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/constants';

export function Logo() {
  const [name, lastName] = COMPANY_NAME.split(' ');
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary p-1 logo-border-gradient">
        <span className="font-headline text-2xl font-bold text-primary-foreground">
          S
        </span>
      </div>
      <span className="text-xl font-headline font-bold text-foreground inline-flex items-baseline">
        {name}
        <span className="typing-animation-container ml-1 text-primary">
          {lastName}
          <span className="caret"></span>
        </span>
      </span>
    </Link>
  );
}
