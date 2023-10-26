import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import {User} from "./types/User";

const dashboardText = "Dashboard User";
//
// interface User {
//     name: string;
//     role: 'ADMIN' | 'OFFICER';
// }

const user: User = {
    name: 'Maria',
    role: 'ADMIN'
};

export default function App() {
  return (
      <div className="App">
        <Dashboard user={user} dashboardText={dashboardText} />
        <Profile user={user} />
      </div>
  );
}