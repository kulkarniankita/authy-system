'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLink({
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
          ? 'bg-brand-accent text-brand-secondary font-medium px-3 py-2 rounded-md w-full'
          : 'text-brand-secondary/70 hover:bg-gray-100 px-3 py-2 rounded-md w-full'
      )}
    >
      {name}
    </Link>
  );
}
