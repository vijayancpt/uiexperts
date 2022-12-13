import { useNavigate } from "react-router";

export const Header = () => {
const navigate = useNavigate();
    return (
        <div style={{float:'right'}}>
            <button onClick={()=>navigate("/")}>Home</button>
        </div>
    );
}