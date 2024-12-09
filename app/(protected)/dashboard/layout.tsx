import { auth } from '@/auth';
import AuthPanel from '@/components/auth-panel';
import DashboardLink from '@/components/dashboard-link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();

  return (
    <div className="min-h-screen">
      {/* Dashboard Layout */}
      <div className="flex  max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 min-h-96">
          <nav className="p-4 space-y-2 flex flex-col">
            <DashboardLink href="/dashboard" name="Overview" />
            <DashboardLink href="/dashboard/profile" name="Profile" />
            <DashboardLink href="/dashboard/settings" name="Settings" />
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* Debug Panel */}
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
