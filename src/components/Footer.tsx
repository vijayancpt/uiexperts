import { useNavigate } from "react-router";

export const Footer = () => {
const navigate = useNavigate();
    return (
        <div style={{float:'right', bottom:'2px'}}>
            <button onClick={()=>navigate("/tech-dashboard")}>Home</button>
        </div>
    );
}