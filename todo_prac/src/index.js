import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Above codes import the asset and file we need to execute the file

const DATA = [
    {id: "todo-0", name: "Eat",completed: true},
    {id: "todo-1", name: "Sleep",completed: false},
    {id: "todo-2", name: "Repeat",completed: false}
];

const FILTER = [
    {pressed: true, name: "All"},
    {pressed: false, name: "Active"},
    {pressed: false, name: "Completed"},
]

ReactDOM.render(<App tasks={DATA} filters={FILTER} />, document.getElementById('root')); // first argument shows the compenent to render, App in this case                                                
// Second argument shows the compnent to be rendered, the elecment with ID = root in the docs.
// All of this tells React that we want to render our React application with the App component as the root, or first component.
registerServiceWorker();
