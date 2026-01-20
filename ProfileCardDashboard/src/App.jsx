import ProfileCard from "./Components/ProfileCard";
import {users} from "./data/users";
function App ()
{
  return (<div style={{padding :"20px"}}>
    <h1>Profile Card Dashboard</h1>
    <div style={{display:"flex",gap:"20px"}}>
      {users.map((user) =>(
        <ProfileCard
        key={user.id}
        name={user.name}
        role={user.role}
        avatar={user.avatar}
        skills={user.skills}
        isOnline={user.isOnline}
        />
      ))}
    </div>
    </div>);
}
export default App;