import React from 'react'
// import {mdDeleteSweep} from 'react-icons/md'

function TaskItem({task, deleteTask, toggleCheck}) {
  return <li className='items'>
    <div className='items-text'>
        <input type="checkbox" checked={task.checked} onChange={()=>toggleCheck(task.taskName)} />
        <p className={task.checked ? 'isChecked' :
        ''}>
{task.taskName}
        </p>
    </div>
{/* <mdDeleteSweep className="delete-icon"/> */}

<button className='delete-icon' onClick={()=>deleteTask(task.taskName)}>🚨</button>

  </li>
}

export default  TaskItem;