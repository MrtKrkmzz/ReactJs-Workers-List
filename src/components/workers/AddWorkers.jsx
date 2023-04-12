import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddWorkers = ({ setWorkers,error,setError}) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || salary.trim().length === 0) {
      return setError(true)
      
    }
    console.log(name, salary);
    setName("");
    setSalary("");
    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random()*1000),
        name: name,
        salary: salary,
      },
      ...prevState,
    ]);
  };
  return (
   <div>
     <ErrorModal error = {error} setError={setError}/>
    <Card>
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name">Çalışan İsmi</label>
        <input
          value={name}
          type="text"
          placeholder="Çalışan İsmi Giriniz..."
          id="name"
          className="max-w-[40rem] w-full mx-auto border p-2"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="salary">Çalışan Maaşı</label>
        <input
          value={salary}
          type="number"
          placeholder="Çalışan Maaşı Giriniz..."
          id="salary"
          className="max-w-[40rem] w-full mx-auto border p-2"
          onChange={(e) => setSalary(e.target.value)}
        />
        <Button className="mt-2" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
   </div>
  );
};

export default AddWorkers;
