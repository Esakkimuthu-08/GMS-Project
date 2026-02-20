import StaffAdminLayout from "../../layouts/StaffAdminLayout";
import { Search } from "lucide-react";

const grievances = [
  {
    id: "GRV-001",
    studentName: "John Doe",
    category: "Academic",
    department: "Engineering",
    status: "closed",
  },
  {
    id: "GRV-002",
    studentName: "Jane Smith",
    category: "Facilities",
    department: "Science",
    status: "in_progress",
  },
  {
    id: "GRV-003",
    studentName: "Mike Johnson",
    category: "Hostel",
    department: "Commerce",
    status: "open",
  },
  {
    id: "GRV-004",
    studentName: "Sarah Williams",
    category: "Staff Conduct",
    department: "Engineering",
    status: "in_progress",
  },
  {
    id: "GRV-005",
    studentName: "Tom Brown",
    category: "Attendance",
    department: "Arts",
    status: "closed",
  },
];

const statusStyles = {
  open: "bg-red-100 text-red-700",
  in_progress: "bg-orange-100 text-orange-700",
  closed: "bg-green-100 text-green-700",
  reopened: "bg-purple-100 text-purple-700",
};

export default function AdminGrievances() {
  return (
    <StaffAdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          All Grievances
        </h1>
        <p className="text-muted-foreground mb-8">
          Monitor and manage all grievances across departments
        </p>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md border border-border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-2.5 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Ticket ID or Student Name"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All Categories</option>
                <option>Academic</option>
                <option>Facilities</option>
                <option>Staff Conduct</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Department
              </label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Science</option>
                <option>Commerce</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All Statuses</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b">
                <tr>
                  <th className="px-6 py-4 text-left">Ticket ID</th>
                  <th className="px-6 py-4 text-left">Student Name</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Department</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {grievances.map((grievance, index) => (
                  <tr
                    key={grievance.id}
                    className={`border-b hover:bg-secondary/50 ${
                      index % 2 === 1 ? "bg-white" : "bg-background"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-primary">
                      {grievance.id}
                    </td>
                    <td className="px-6 py-4">{grievance.studentName}</td>
                    <td className="px-6 py-4">{grievance.category}</td>
                    <td className="px-6 py-4">{grievance.department}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusStyles[grievance.status]
                        }`}
                      >
                        {grievance.status.replace("_", " ").toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="px-3 py-1 text-sm text-primary hover:bg-primary/10 rounded">
                        View
                      </button>
                      <button className="px-3 py-1 text-sm text-primary hover:bg-primary/10 rounded">
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StaffAdminLayout>
  );
}
