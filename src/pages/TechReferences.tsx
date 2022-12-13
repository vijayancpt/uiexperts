import { useNavigate } from "react-router"
import './tech-references.scss';

export const TechReferences = () => {
    const navigate = useNavigate();
    return (
        <div className="tech-ref-container">
            <h1>Tech References</h1>
            <div>
                <button onClick={() => { navigate('/ionic-cheat-sheet') }}>Ionic Ref</button>
            </div>
            <div>
                <button onClick={() => { navigate('/quick-refs') }}>Quick References</button>
            </div>
            <div>
                <button onClick={() => { navigate('/web-design-pattern') }}>Web Design Patterns</button>
            </div>
            <div>
                <button onClick={() => { navigate('/points-to-consider') }}>PointsToConsider</button>
            </div>

        </div>
    )
}