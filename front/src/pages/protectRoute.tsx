import { Navigate, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ element }) => {
  const userId = document.cookie
    .split("; ")
    .find((row) => row.startsWith("userId="))
    ?.split("=")[1];
  if (!userId) {
    return <Navigate to="/register" replace />;
  }
  return element;
};

export default ProtectedRoute;
