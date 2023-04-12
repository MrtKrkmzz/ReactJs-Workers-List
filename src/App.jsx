import { useState } from "react";
import "./App.css";
import AddWorkers from "./components/workers/AddWorkers";
import WorkerList from "./components/workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState([]);
  const [error,setError]=useState(false);
  return (
    <div className="App">
      <AddWorkers setWorkers={setWorkers} setError={setError} error={error} />
      <WorkerList workers={workers} setWorkers={setWorkers} error={error} setError={setError}/>
    </div>
  );
}

export default App;
