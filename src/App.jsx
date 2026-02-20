import "./index.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth
import { Login } from "./pages/auth/login";
import { StudentSignup } from "./pages/auth/register/student-signup";

// Student
import StudentDashboard from "./pages/student/Dashboard";
import StudentGrievances from "./pages/student/Grievances";
import RaiseGrievance from "./pages/student/RaiseGrievance";

// Staff
import StaffDashboard from "./pages/staff/Dashboard";
import StaffGrievances from "./pages/staff/Grievances";

// Admin
import AdminDashboard from "./pages/admin/Dashboard";
import AdminGrievances from "./pages/admin/Grievances";
import AdminReports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";
import AdminUsers from "./pages/admin/Users";
import { StaffsignUp } from "./pages/auth/register/staff-signup";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Index />} />

        {/* Auth */}
        <Route path="/student/login" element={<Login />} />
        <Route path="/student/signup" element={<StudentSignup />} />

        <Route path="/staff/login" element={<Login />} />
        <Route path="/staff/signup" element={<StaffsignUp />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<StaffsignUp />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/raise-grievance" element={<RaiseGrievance />} />
        <Route path="/student/grievances" element={<StudentGrievances />} />

        {/* Staff */}
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/staff/grievances" element={<StaffGrievances />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/grievances" element={<AdminGrievances />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

