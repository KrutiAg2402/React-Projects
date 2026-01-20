import SkillTag from "./skillTag";
import StatusBadge from "./StatusBadge";

export default function ProfileCard({name, role, avatar, skills, isOnline}){
    return (
        <div
        style={{
            border:"1px solid #ddd",
            borderRadius:"8px",
            padding:"16px",
            width:"250px"
        }}>
            <img
            src ={avatar}
            alt={name}
            style={{width:'100%',borderRadius:"6px"}}
            />
            <h3>{name}</h3>
            <p>{role}</p>
            <StatusBadge isOnline={isOnline}/>
            <div style={{marginTop:"10px"}}>
                {skills.map((skill)=>(<SkillTag key={skill} label={skill} />))}
            </div>

        </div>
    )
 
}