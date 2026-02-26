import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store";

const PublicRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const role = localStorage.getItem("role");

    console.log(isAuthenticated && role);
    

    if (isAuthenticated && role) {
        return <Navigate to={`/${role}/dashboard`} replace />;
    }

    return children;
};

export default PublicRoute;