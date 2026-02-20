import StaffAdminLayout from "../../layouts/StaffAdminLayout";
import {
  FileText,
  AlertCircle,
  Clock,
  CheckCircle,
  RotateCcw,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Grievances",
      value: "245",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-primary",
    },
    {
      label: "Open",
      value: "32",
      icon: AlertCircle,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      label: "In Process",
      value: "58",
      icon: Clock,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      label: "Closed",
      value: "145",
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      label: "Reopened",
      value: "10",
      icon: RotateCcw,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <StaffAdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs font-medium mb-2 uppercase">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-2 rounded-lg`}>
                    <Icon className={stat.iconColor} size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md border border-border p-8">
            <h2 className="text-lg font-bold text-foreground mb-6">
              Monthly Grievance Trend
            </h2>
            <div className="h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">📊</div>
                <p>Chart visualization placeholder</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-border p-8">
            <h2 className="text-lg font-bold text-foreground mb-6">
              By Category
            </h2>
            <div className="h-64 bg-secondary/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-2">🥧</div>
                <p>Chart placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <a
            href="/admin/grievances"
            className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg hover:border-primary transition-all group"
          >
            <p className="font-semibold text-foreground mb-2 group-hover:text-primary">
              Manage Grievances
            </p>
            <p className="text-sm text-muted-foreground">View all grievances</p>
          </a>

          <a
            href="/admin/users"
            className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg hover:border-primary transition-all group"
          >
            <p className="font-semibold text-foreground mb-2 group-hover:text-primary">
              User Management
            </p>
            <p className="text-sm text-muted-foreground">
              Manage staff & admins
            </p>
          </a>

          <a
            href="/admin/reports"
            className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg hover:border-primary transition-all group"
          >
            <p className="font-semibold text-foreground mb-2 group-hover:text-primary">
              Reports
            </p>
            <p className="text-sm text-muted-foreground">View analytics</p>
          </a>

          <a
            href="/admin/settings"
            className="bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg hover:border-primary transition-all group"
          >
            <p className="font-semibold text-foreground mb-2 group-hover:text-primary">
              Settings
            </p>
            <p className="text-sm text-muted-foreground">Configure system</p>
          </a>
        </div>
      </div>
    </StaffAdminLayout>
  );
}
