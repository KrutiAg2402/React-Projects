// reusable component to show user's status
// props control UI
export default function StatusBadge({isOnline})
{
    //console.log("StatusBadge Rendered" + {isOnline});
    return (
        <span style = {{
            color : isOnline ? "green" : "red" ,
            fontWeight:"bold",
        }}
        >
            {isOnline ? "Online" : "Offline"}
        </span>
    );
}