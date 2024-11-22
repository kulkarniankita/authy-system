'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? 'bg-brand-primary text-gray-900 hover:bg-brand-primary/90 rounded-md px-2 py-1'
          : 'text-brand-secondary hover:bg-gray-100 rounded-md px-2 py-1'
      )}
    >
      {name}
    </Link>
  );
}
