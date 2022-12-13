import { useNavigate } from "react-router";

export const Footer = () => {
const navigate = useNavigate();
    return (
        <div style={{float:'right', bottom:'2px'}}>
            <button style={{
                    backgroundColor: 'black',
                    border: 'none',
                    color: 'black',
            }} onClick={()=>navigate("/tech-dashboard")}>&gt;&gt;</button>
        </div>
    );
}