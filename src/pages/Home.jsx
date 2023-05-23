import { useState} from "react";
import AddTask from "../components/AddTask";
import ListTasks from "../components/ListTasks";

import Data from "../helper/Data";

const Home = () => {

  const [tasks, setTasks] = useState(Data);
  

  return (

    <div>
      <AddTask tasks={tasks} setTasks={setTasks}/>

      <ListTasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
