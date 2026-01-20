// reusable component to show user's status
// props control UI
export default function statusBadge({isOnline})
{
    return (
        <span style = {{
            color : isOnline ?"green":"red",
            fontWeight:"bold",
        }}
        >
            {isOnline ? "Online" : "Offline"}
        </span>
    );
}