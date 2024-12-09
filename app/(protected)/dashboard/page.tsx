export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-brand-secondary">
        Dashboard Overview
      </h2>
      <p className="text-brand-secondary/70">
        This is a protected route, only visible to authenticated users.
      </p>
    </div>
  );
}
