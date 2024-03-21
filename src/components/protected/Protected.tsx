import { Navigate } from "react-router-dom";

export type ProtectedProps = {
    children: React.ReactNode;
    isAuth: boolean;
    authAccess?: boolean;
};

export default function Protected({ children, isAuth, authAccess = true }: ProtectedProps) {
    return isAuth ? (
        <>{children}</>
    ) : (
        <Navigate to={authAccess ? "/" : "/login"} replace />
    );
}