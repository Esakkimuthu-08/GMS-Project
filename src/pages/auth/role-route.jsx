import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store";

const RoleRoute = ({ allowedRoles, children }) => {
    const role = localStorage.getItem("role");
    console.log(role);

    console.log(allowedRoles.includes(role));
    
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RoleRoute;