import { StudentLayout } from "../../layouts/StudentLayout";
import { Eye } from "lucide-react";

const grievances = [
  {
    id: "GRV-001",
    category: "Academic",
    subject: "Assignment grading issue",
    date: "2024-01-15",
    status: "resolved",
  },
  {
    id: "GRV-002",
    category: "Facilities",
    subject: "Library WiFi not working",
    date: "2024-01-12",
    status: "in_progress",
  },
  {
    id: "GRV-003",
    category: "Hostel",
    subject: "Room maintenance request",
    date: "2024-01-10",
    status: "resolved",
  },
  {
    id: "GRV-004",
    category: "Staff Conduct",
    subject: "Unfair examination conduct",
    date: "2024-01-08",
    status: "in_progress",
  },
  {
    id: "GRV-005",
    category: "Attendance",
    subject: "Attendance record correction",
    date: "2024-01-05",
    status: "waiting",
  },
  {
    id: "GRV-006",
    category: "Other",
    subject: "Canteen food quality",
    date: "2024-01-03",
    status: "resolved",
  },
];

const statusStyles = {
  resolved: {
    badge: "bg-green-100 text-green-700",
  },
  in_progress: {
    badge: "bg-blue-100 text-blue-700",
  },
  waiting: {
    badge: "bg-yellow-100 text-yellow-700",
  },
};

const getStatusLabel = (status) => {
  return status === "in_progress"
    ? "In Progress"
    : status.charAt(0).toUpperCase() + status.slice(1);
};

export default function StudentGrievances() {
  return (
    <StudentLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">My Grievances</h1>

        <p className="text-muted-foreground mb-8">
          Track the status of all your submitted grievances
        </p>

        <div className="bg-white rounded-lg shadow-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Ticket ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {grievances.map((grievance, index) => {
                  const styles = statusStyles[grievance.status];

                  return (
                    <tr
                      key={grievance.id}
                      className={`border-b hover:bg-secondary/50 ${
                        index % 2 === 0 ? "bg-background" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-primary">
                        {grievance.id}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {grievance.category}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {grievance.subject}
                      </td>

                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(grievance.date).toLocaleDateString()}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.badge}`}
                        >
                          {getStatusLabel(grievance.status)}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button className="inline-flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg">
                          <Eye size={16} />
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
