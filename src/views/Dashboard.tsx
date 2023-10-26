import { User } from "../types/User";
import React from "react";

interface DashboardProps {
    user: User;
    dashboardText: string;
}

const Dashboard: React.FC<DashboardProps> = ({ user, dashboardText }) => {
    return  (
        <div>
            <div>{dashboardText}</div>
        </div>
    )
};

export default Dashboard;