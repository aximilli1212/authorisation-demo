import { Forbidden } from "./Forbidden";
import { User } from "../types/User";
import React from "react";
import { useAuthorization } from "../hooks/useAuthorization";

interface Props {
    authorizedRoles: Array<string>;
    children: React.ReactElement;
    user: User;
}

const Authorized:React.FC<Props> = ({authorizedRoles,children,user}) => {
    const isAuthorized = useAuthorization(authorizedRoles, user);
    if (!isAuthorized) return <Forbidden />;
    return (<>{children}</>);
};

export default Authorized;