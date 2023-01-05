import React, { useState } from 'react'; //import React Library itself(dependcy, in package.json)
//import logo from './logo.svg'; // ./ means external source (in source directory), .svg means is not a js file
import './App.css'; 
import Todo from "./components/Todo";
import Show from "./components/Filter";
import Form from "./components/Form";
import { nanoid } from "nanoid"; // a small library for generate random id


const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
} //Three types of filter

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  const [tasks, setTasks] = useState(props.tasks); //pass props.tasks into useState() hook
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id){
  const updatedTasks = tasks.map((task) => {
    // if this id has the same ID as the edited task
    if(id === task.id){
      return {...task,completed: !task.completed} // copy the tasks array, and make the completed const into opposite
    }
    return task;
  });
  setTasks(updatedTasks); // return the updated Tasks
}

  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`,name, completed:"false"};
    setTasks([...tasks, newTask]); //copy exisint array and add the new task to the end
  }

  function deleteTask(id){
    // the filter function will exclude if the id prop matches the passed-in id argument
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName){
    const editedTastlist = tasks.map((task)=>{
      if(id ===task.id){
        //
        return{...task, name: newName}
      }
      return task;
    })
    setTasks(editedTastlist);
  }

  const tasklist = tasks.map((task) => (
      <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key = {task.id} //The unique key should be use for rendering every iteration
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask = {deleteTask}
      editTask = {editTask}
      />
      )
  );

  const filterList = FILTER_NAMES.map((name) => (
    <filterbtn_list key = {name} name = {name}/>
  ));

  const tasksNoun = tasklist.length !== 1 ? 'tasks': 'task';
  const headingText = `${tasklist.length} ${tasksNoun} remaining`; // it count the lenght of taskList
  const filterbtn_list = props.filters.map((filter) =>(
      <Show 
      name = {filter.name}
      pressed = {filter.pressed}/>
    )  
  );
  //do the iteration defintion before the return
  // by passinf the function to Form, Form can use the function by props
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask = {addTask}/>

      <div className="filters btn-group stack-exception">

        {filterbtn_list}

      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >

        {tasklist}
    

      </ul>
    </div>
  );
}

export default App; // Make the function can be used in other file
