// import { handle } from 'express/lib/application'
import React, { useState } from 'react';

const Taskinput=({ addTask })=>{
    const [task,setTask] = useState('')
    // console.log(task)

    function handleInputValue(event){
        setTask(event.target.value)
    }

    function handleAddTask(event){
        event.preventDefault()
        if(task.trim()==='') return;
        addTask(task);
    }

  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input type="text" value={task} placeholder='Add Items....' onChange={handleInputValue}/>
        <button>+</button>
    </form>
  )
}

export default  Taskinput;