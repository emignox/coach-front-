import { useState, useEffect } from "react";
import { Navigate, RouteProps, useLocation } from "react-router-dom";

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

const PasswordProtectedRoute: React.FC<RouteProps> = ({ element }) => {
  const [hasEnteredPassword, setHasEnteredPassword] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/coach-calendar" && !hasEnteredPassword) {
      const password = prompt("Inserisci la password");
      if (password !== "coach") {
        setHasEnteredPassword(false);
      } else {
        setHasEnteredPassword(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Pass an empty dependency array to run the effect only once

  if (!hasEnteredPassword && location.pathname === "/coach-calendar") {
    return <Navigate to="/coach-calendar" replace />;
  }

  return element;
};
export { ProtectedRoute, PasswordProtectedRoute };
