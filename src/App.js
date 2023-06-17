import { useState } from 'react'
import Tasks from './components/Tasks';
import Header from './components/Header'
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState ([{

    id:1,
    text:'doctors appointment',
    day :'feb 5th 2:30 pm',
    remainder:true
},
{
    id:2,
    text:'reading',
    day :'feb 6th 10 am',
    remainder:true
},
{
    id:3,
    text:'boxing',
    day:'feb 6th 7 pm',
    remainder:true
}])

const addTask =(task)=>{
const id= Math.floor(Math.random() * 10000) + 1
const newtask = {id,...task}
setTasks([...tasks,newtask])
}

const deletetask=(id)=>{
 setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleRemainder = (id) =>{
setTasks(tasks.map((task)=>task.id === id ? {...task, remainder: !task.remainder } : task))
}

  return (
    <div className="container">
      <header className="App-header">
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} / >
          {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleRemainder}/> : 'no tasks'}
      </header>
    </div>
  );
}



export default App;
