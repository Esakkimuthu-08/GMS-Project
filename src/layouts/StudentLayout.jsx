import { useRole } from "../context/roleContext";
import { useNavigate } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";
import {Link} from "react-router-dom";

export function StudentLayout({ children }) {
  const { logout } = useRole();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { label: "Dashboard", path: "/student/dashboard" },
    { label: "Raise Grievance", path: "/student/raise-grievance" },
    { label: "My Grievances", path: "/student/grievances" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="font-bold text-xl">Grievance Portal</div>

              <div className="hidden md:flex gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity text-sm"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                

              <Link to={item.path} className="hover:opacity-90 text-sm font-medium">
                {item.label}
              </Link>

              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
