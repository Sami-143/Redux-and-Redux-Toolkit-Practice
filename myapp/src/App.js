import Home from "./Home"
import { useSelector } from "react-redux";



function App() {
  const {c} = useSelector((state)=>state.custom);
  return (
    <div>
      <h1>{c}</h1>
      <Home/>
    </div>
  );
}

export default App;
