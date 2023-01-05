import React, {useState} from "react"; // The basic library for React app (React' must be in scope when using JSX  react/react-in-jsx-scope : Upper case of Reac)

export default function Todo(props) { // The props will be passed by the para in app.js
  const [isEditing, setEditing] = useState(false); //initial the value isEditing into false  
  const [newName, setNewName] = useState(''); // To update the newname after editing
  
  function handleChange(e){
    setNewName(e.target.value);  
  }

  function handleSubmit(e){
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  //Template can be chose by using conditional rendering
  //Template 1: Able to edit the contents of tasks(using Form and input)
  const editTemplate = (
    <form className = "stack-small" onSubmit = {handleSubmit}>
      <div className = "form-group">
        <label className = "todo-label" htmlFor = {props.id}>
        New name for {props.name}
        </label>
        <input 
        id={props.id} 
        className = "todo-text" 
        type = "text"
        value = {newName}
        onChange = {handleChange}
        ></input>
      </div>
      <div className = "btn-group">
        <button type = "button" className = "btn todo-cancel" onClick={()=>setEditing(false)}>
          Cancel <span className="visually-hidden"> renaming for {props.name} </span>
        </button>
        <button type = "submit" className = "btn btn__primary todo-edit">
          Save  <span className="visually-hidden"> new name for {props.name} </span>
        </button>
      </div>
    </form>
  );
  //Template 2: Can only see the showing content of tasks(using basic elements)
  const viewTemplate = (
    <div className = "stack-small">
      <div className = "c-cb">
        <input
          id = {props.id}
          type = "checkbox"
          defaultChecked = {props.completed}
          onChange = {() =>
          props.toggleTaskCompleted(props.id)}
          ></input>
        <label className = "todo-label" htmlfor = {props.id}>
            {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Edit <span className = "visually-hidden"> {props.name} </span>
        </button>
        <button
          type = "button"
          className = "btn btn__danger"
          onClick = {()=>props.deletedTask(props.id)}
        >
          Delete <span className = "visually-hidden"> {props.name} </span>
        </button>
      </div>
    </div>
  );
  // Select the right template by user's operation
  return <li className = "todo"> {isEditing? editTemplate : viewTemplate} </li>
}
  // now the components can be used in other files
