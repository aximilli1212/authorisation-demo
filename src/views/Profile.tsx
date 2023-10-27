import { User } from "../types/User"
import React from "react";

type ProfileProps = {
    user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
                <div style={{border: '1px solid gray'}}>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>
    );
};

export default Profile;