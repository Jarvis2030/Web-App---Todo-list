import React, {useState} from "react" //useState return two things: the state and function to update state.

export default function Form(props){
    // The event should help pass the info from one app to another -> callback props
    const [name, setName] = useState(''); // set the initial name as "Use hook!"
                                        // and function name setName() tp modify name
    
    function handleChange(e){
        setName(e.target.value); // e.target represent the element that fired the change
    }

    function handleSubmit(e){
        e.preventDefault(); //Block the default behavior of event
        props.addTask(name); // output the message with callback props - send back to App/
        setName("");
    }
    return(
        //set everything into default value by calling the handleSubmit function
        <form onSubmit={handleSubmit}> 
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value = {name}
        onChange = {handleChange} // The input value will pass to function handleChange
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
    );
}