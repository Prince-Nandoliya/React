
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/contextauth";

const ProtectedRoute = ({
  children,
  adminOnly = false,
}) => {
  const { user, token, loading } =
    useContext(AuthContext);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.Role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
