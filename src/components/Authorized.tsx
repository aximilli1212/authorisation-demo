import { Forbidden } from "./Forbidden";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types/User";
import React from "react";

interface Props {
    authorizedRoles: string[];
    children: React.ReactNode;
    user: User;
}

export const Authorized = ({ authorizedRoles, children, user }: Props) => {
    const { isAdmin, isOfficer } = useAuth(user);

    if (authorizedRoles.includes("ADMIN") && !isAdmin) return <Forbidden />;
    if (authorizedRoles.includes("OFFICER") && !isOfficer)
        return <Forbidden />;

    return <>{children}</>;
};