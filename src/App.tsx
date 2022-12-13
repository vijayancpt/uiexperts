import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={()=>navigate('tech-ref')}>Tech References</button>
    </div>
  );
}

export default App;
