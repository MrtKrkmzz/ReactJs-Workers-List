import { useEffect, useState } from "react";
import "./App.css";
import AddWorkers from "./components/workers/AddWorkers";
import WorkerList from "./components/workers/WorkerList";

function App() {
  const [workers, setWorkers] = useState(localStorage.getItem("workers")
  ? JSON.parse(localStorage.getItem("workers"))
  : []
  );
  const [error,setError]=useState(false);
  useEffect(()=>{
    localStorage.setItem("workers",JSON.stringify(workers))
  },[workers])
  return (
    <div className="App">
      <AddWorkers setWorkers={setWorkers} setError={setError} error={error} />
      <WorkerList workers={workers} setWorkers={setWorkers} error={error} setError={setError}/>
    </div>
  );
}

export default App;
