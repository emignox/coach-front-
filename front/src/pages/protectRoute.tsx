import { Navigate, RouteProps, useLocation } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ element }) => {
  const location = useLocation();
  const userId = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userId="))
    ?.split("=")[1];

  if (!userId) {
    return <Navigate to="/register" replace />;
  }

  if (location.pathname === "/coach-calendar") {
    const password = prompt("Inserisci la password");
    if (password !== "coach") {
      return <Navigate to="/coach-calendar" replace />;
    }
  }

  return element;
};

export default ProtectedRoute;
