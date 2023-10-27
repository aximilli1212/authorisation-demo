import { User } from "../types/User";
import { useState, useEffect } from "react";

export const useAuthorization = (authorizedRoles: Array<string>, user: User): boolean => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (authorizedRoles.includes(user.role)) {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
        }
    }, [authorizedRoles, user]);

    return isAuthorized;
};