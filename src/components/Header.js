import Button from './Button'
const Header = ({onAdd,showAdd}) =>{
    
    return (
        <header className='header'>
            <h1>To do List</h1>
            <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}/>
        </header>
    )
}

export default Header