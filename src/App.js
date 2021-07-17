import React, {useState} from 'react'
import TodoList from './Todoings/TodoList';
import Context from './context';
import Inputer from './Inputer';

function App() {


const [eminem, setEminem] = useState( [
  {id:1 , completed: false, title: "Hey"},
  {id:2 , completed: true, title: "you"},
  {id:3 , completed: false, title: "My"}
])


function onToggle(id) {
  setEminem(
    eminem.map(todo => {
    if (todo.id === id){
      todo.completed = !todo.completed
    } 
    return todo
  })
)}
 
function removeTodo(id) {
  setEminem(eminem.filter(todo => todo.id !== id))
}

function addTodo(title) {
  setEminem(eminem.concat([
    {
    title,
    id: Date.now(),
    completed: false
  }
]))
}

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
      <h1>
        <span>M</span>
        <span>y</span>
        <span>T</span>
        <span>o</span>
        <span>d</span>
        <span>o</span>
        <span>s</span>
        <span>!</span>
      </h1>

        <Inputer onCreate={addTodo}/>
       {eminem.length ? (<TodoList list={eminem}
        Stalker={onToggle}/>) : (
          <div className="bec">
          <span className="back">
          <span>N</span>
          <span>o</span>
          <span>T</span>
          <span>o</span>
          <span>d</span>
          <span>o</span>
          <span>s</span>
          </span>
          </div>
        ) }
      </div>
    </Context.Provider>
  );
}

export default App;
