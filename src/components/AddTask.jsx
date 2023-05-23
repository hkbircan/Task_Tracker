import { useState } from "react";

const AddTask = ({tasks, setTasks}) => {

  const[text,setText]=useState("")
  const[day,setDay]=useState("")
  const[fill,setFill]=useState(false)
  const[value,setValue]=useState("")
  const[formVis,setformVis]=useState(true)

  const send=(e)=>{
    e.preventDefault()

    if(tasks.map(x => x.text).includes(text)){
       setFill(true)
    }else {
      setTasks([...tasks, {id:(tasks[tasks.length-1].id) + 1 , text:text, day:day, bitti:false }])
      setFill(false);
      setValue("")
    }
    
    

    
    }
 
  
 
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          onClick={() => setformVis(!formVis)}
          style={{background:"#908d01"}}
        >
           {formVis ? <span>CLOSE TASK</span> : <span>ADD TASK</span>}
        </button>
      </header>
        {formVis && <form onSubmit={send}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Add Task"
              value={`${value}`}
              required
              onChange={(e)=>{setText(e.target.value); setValue(e.target.value)}}
             
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              name="day"
              placeholder="Add Task"
              min="2023-01-01T00:00" 
              max="2023-12-31T00:00"
              required
              onChange={(e)=>setDay(e.target.value)}
            
            />
          </div>
          {fill ? <span style={{color:"aqua"}}>Please choose a different task name !</span> : <br/>}
          <div>
            <button className="btn btn-submit" type="submit">
              SAVE
            </button>
          </div>
        </form>}
      
    </div>
  );
};

export default AddTask;
