import { Navigate } from "react-router-dom";
const AuthRouter = ({ children }) => {
  if (window.localStorage.length) {
    return <>{children}</>;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default AuthRouter;
