import { Forbidden } from "./Forbidden";
import { User } from "../types/User";
import React from "react";

interface Props {
    authorizedRoles: Array<string>;
    children: React.ReactElement;
    user: User;
}

const Authorized:React.FC<Props> = ({authorizedRoles,children,user}) => {
    if (!authorizedRoles.includes(user.role)) return <Forbidden />;
    return (<>{children}</>);
};


export default Authorized;