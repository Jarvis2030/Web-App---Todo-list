import React from "react"; // The basic library for React app (React' must be in scope when using JSX  react/react-in-jsx-scope : Upper case of Reac)

export default function Todo(props) { // The props will be passed by the para in app.js
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input id={props.id}
          type="checkbox" 
          defaultChecked={props.completed} 
          onChange = {() => props.toggleTaskCompleted(props.id)}
        />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button type="button" 
          className="btn btn__danger"
          onClick={() => props.deletedTask(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
    );
  }
  // now the components can be used in other files
