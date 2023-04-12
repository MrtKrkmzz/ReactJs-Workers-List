import React from "react";
import Card from "../UI/Card";
const WorkerList = ({ workers,setWorkers}) => {

    const deleteWorker =(id)=>{
        setWorkers(workers.filter((item)=> item.id !== id))
    }
  return (
    <Card>
      <ul>
        <li className="flex justify-between py-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((item) => (
          <li key={item.id} className="flex justify-between hover:shadow-md px-2 " onClick={()=>deleteWorker(item.id)}>
            <span className="text-sm">{item.name}</span>
            <span className="text-sm text-teal-400"> {item.salary}₺</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
