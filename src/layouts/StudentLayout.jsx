import { useNavigate, Link } from "react-router-dom";
import { Home, FilePlus, List, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export function StudentLayout({ children }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/");
  };

  const navItems = [
    { label: "Dashboard", path: "/student/dashboard", icon: Home },
    { label: "Raise Grievance", path: "/student/raise-grievance", icon: FilePlus },
    { label: "My Grievances", path: "/student/grievances", icon: List },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-primary-foreground shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="font-bold text-xl">Grievance Portal</div>

              <div className="hidden md:flex gap-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.path} to={item.path} className="flex gap-2">
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
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

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="hover:opacity-90 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}