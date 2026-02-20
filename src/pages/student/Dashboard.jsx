import { StudentLayout } from "../../layouts/StudentLayout";
import { FileText, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const stats = [
    {
      label: "Total Grievances",
      value: "8",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-primary",
    },
    {
      label: "In Progress",
      value: "3",
      icon: Clock,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      label: "Resolved",
      value: "5",
      icon: CheckCircle,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <StudentLayout>
      <div>
        <h1 className="text-3xl font-bold mb-8">Welcome, Student</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-lg shadow-md border p-6"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={stat.iconColor} size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md border p-8">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/student/raise-grievance"
              className="flex justify-between p-4 border rounded-lg hover:bg-secondary/50 group"
            >
              <div>
                <p className="font-semibold">Raise New Grievance</p>
                <p className="text-sm text-muted-foreground">
                  Submit a new grievance
                </p>
              </div>
              <span className="text-primary group-hover:translate-x-1">→</span>
            </Link>

            <Link
              to="/student/grievances"
              className="flex justify-between p-4 border rounded-lg hover:bg-secondary/50 group"
            >
              <div>
                <p className="font-semibold">View My Grievances</p>
                <p className="text-sm text-muted-foreground">
                  Check status and details
                </p>
              </div>
              <span className="text-primary group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
