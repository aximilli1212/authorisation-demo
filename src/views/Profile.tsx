import {Authorized} from "../components/Authorized"
import { useAuth } from "../hooks/useAuth"
import { User } from "../types/User"

type ProfileProps = {
    user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
    const { isAdmin } = useAuth(user);

    return (
        <Authorized user={user} authorizedRoles={["ADMIN"]}>
            {isAdmin ? (
                <div>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>
            ) : (
                <div>Forbidden</div>
            )}
        </Authorized>
    );
};

export default Profile;