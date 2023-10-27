import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import {User} from "./types/User";
import Authorized from "./components/Authorized";

const dashboardText = "Dashboard User";
let profileAuthorisedRoles: Array<string> = ['OFFICER', 'OTHER'] ;
const dashboardAuthorisedRoles: Array<string> = ['ADMIN', 'OFFICER'];

const user: User = {
    name: 'Maria',
    role: 'ADMIN'
};

export default function App() {
  return (
      <div className="App">
          <Authorized authorizedRoles={dashboardAuthorisedRoles} user={user} >
              <Dashboard user={user} dashboardText={dashboardText} />
          </Authorized>

          <Authorized authorizedRoles={profileAuthorisedRoles} user={user} >
              <Profile user={user} />
          </Authorized>
      </div>
  );
}