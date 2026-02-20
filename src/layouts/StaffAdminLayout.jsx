import { useRole } from "../context/roleContext";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Menu,
  X,
  BarChart3,
  Users,
  FileText,
  Settings,
  ClipboardList,
} from "lucide-react";
import { useState } from "react";

export default function StaffAdminLayout({ children }) {
  const { role, logout } = useRole();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const staffNavItems = [
    { label: "Dashboard", path: "/staff/dashboard", icon: BarChart3 },
    { label: "Assigned Grievances", path: "/staff/grievances", icon: ClipboardList },
  ];

  const adminNavItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: BarChart3 },
    { label: "All Grievances", path: "/admin/grievances", icon: ClipboardList },
    { label: "User Management", path: "/admin/users", icon: Users },
    { label: "Reports", path: "/admin/reports", icon: FileText },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ];

  const navItems = role === "admin" ? adminNavItems : staffNavItems;

  return (
    <div className="min-h-screen flex">
      <aside
        className={`border-r transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          {sidebarOpen && <h1 className="font-bold">Grievance Portal</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="px-4 space-y-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100"
            >
              <Icon />
              {sidebarOpen && label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button onClick={handleLogout} className="flex gap-4">
            <LogOut />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
