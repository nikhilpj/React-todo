import {useState} from 'react'
const AddTask=({onAdd})=>{
const [ text,setText] = useState('')
const [ day,setDay] = useState('')
const [ remainder , setRemainder] = useState(false)
const onSubmit = (e) => {
    e.preventDefault()

    if(!text)
    {
        alert('please add a task')
        return
    }
    onAdd({text,day,remainder})
    
        setText('')
        setDay('')
        setRemainder(false)
    
}

    return (
        <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
           <label>Task</label>
           <input type='text' placeholder="add task" value={text} onChange={(e)=> setText(e.target.value)}/>

            </div>
            <div className="form-control">
           <label>Day & time</label>
           <input type='text' placeholder="add day and time"  value={day} onChange={(e)=> setDay(e.target.value)}/>

            </div>
            <div className="form-control form-control-check">
           <label>set remainder</label>
           <input type='checkbox'  checked={remainder}  value={remainder} onChange={(e)=> setRemainder(e.currentTarget.checked)} />

            </div>
            <input type="submit" value='save task' className="btn btn-block" />
        </form >
    )
}
export default AddTask