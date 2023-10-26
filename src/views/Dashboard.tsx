import { User } from "../types/User";
import React from "react";

interface DashboardProps {
    user: User;
    dashboardText: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, dashboardText }) => {
    return user.role === "ADMIN" || user.role === "OFFICER" ? (
        <div>{dashboardText}</div>
    ) : (
        <div>Forbidden</div>
    );
};

export default Dashboard;