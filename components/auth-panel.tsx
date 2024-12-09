'use client';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';

export default function AuthPanel({ session }: { session: Session | null }) {
  const pathname = usePathname();
  return (
    <div className="bg-white p-4 border-t border-gray-200">
      <div className="text-sm text-brand-secondary/70 space-y-1">
        <p>Current Path:{pathname}</p>
        <p>Auth Status: {session ? 'Logged In' : 'Logged Out'}</p>
      </div>
    </div>
  );
}
