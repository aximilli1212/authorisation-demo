import { Forbidden } from "./Forbidden";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types/User";
import React from "react";

interface Props {
    authorizedRoles: string[];
    children: React.ReactNode;
    user: User;
}

const Authorized: React.FC<Props> = ({ authorizedRoles, children, user }) => {
    const { isAdmin, isOfficer } = useAuth(user);

    if (authorizedRoles.includes("ADMIN") && !isAdmin) return <Forbidden />;
    if (authorizedRoles.includes("OFFICER") && !isOfficer)
        return <Forbidden />;

    return <>{children}</>;
};

export default Authorized;