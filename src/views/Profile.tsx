import { User } from "../types/User"
import React from "react";

type ProfileProps = {
    user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
                <div>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>
    );
};

export default Profile;