import StaffAdminLayout from "../../layouts/StaffAdminLayout";
import { Eye, MessageSquare } from "lucide-react";

const grievances = [
  {
    id: "GRV-001",
    studentName: "John Doe",
    category: "Academic",
    priority: "High",
    status: "in_progress",
  },
  {
    id: "GRV-002",
    studentName: "Jane Smith",
    category: "Facilities",
    priority: "Medium",
    status: "waiting",
  },
  {
    id: "GRV-003",
    studentName: "Mike Johnson",
    category: "Hostel",
    priority: "Low",
    status: "in_progress",
  },
  {
    id: "GRV-004",
    studentName: "Sarah Williams",
    category: "Staff Conduct",
    priority: "High",
    status: "new",
  },
  {
    id: "GRV-005",
    studentName: "Tom Brown",
    category: "Attendance",
    priority: "Medium",
    status: "in_progress",
  },
];

const priorityStyles = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Low: "bg-green-100 text-green-700",
};

const statusStyles = {
  new: "bg-blue-50 border-blue-200",
  in_progress: "bg-orange-50 border-orange-200",
  waiting: "bg-purple-50 border-purple-200",
};

const getStatusLabel = (status) =>
  status === "in_progress"
    ? "In Progress"
    : status.charAt(0).toUpperCase() + status.slice(1);

export default function StaffGrievances() {
  return (
    <StaffAdminLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Assigned Grievances</h1>

        <p className="text-muted-foreground mb-8">
          Manage and respond to grievances assigned to you
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
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Priority
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {grievances.map((grievance, index) => {
                  const priorityStyle =
                    priorityStyles[grievance.priority];
                  const statusStyle = statusStyles[grievance.status];

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
                        {grievance.studentName}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {grievance.category}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityStyle}`}
                        >
                          {grievance.priority}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusStyle}`}
                        >
                          {getStatusLabel(grievance.status)}
                        </span>
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button className="inline-flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg">
                          <Eye size={16} />
                          View
                        </button>

                        <button className="inline-flex items-center gap-2 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg">
                          <MessageSquare size={16} />
                          Reply
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
    </StaffAdminLayout>
  );
}
