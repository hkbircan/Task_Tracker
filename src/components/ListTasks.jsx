import React from "react";
import { FaTimesCircle } from "react-icons/fa";


const ListTasks = ({tasks, setTasks}) => {
  console.log(tasks);

  const deleteTask=(id) =>{
    setTasks(tasks.filter((i) => i.id !== id))
  }

  const changeStatus=(id) =>{
    setTasks(tasks.map(x => x.id === id ? {...x, bitti : !x.bitti } : x ))
  }


  return (
    <div>
      {tasks.map(({id,text,day,bitti}) => {

        return (
          <div style={{background:bitti ? "#dbdbd7" : "#fcfcfa", padding:"0.5rem", margin:"0.5rem", textDecoration:bitti ? "line-through":""} } key={id}
          
          
          >
            <h3 onDoubleClick={( )=>changeStatus(id)}>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={()=> deleteTask(id)}
               
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ListTasks;
