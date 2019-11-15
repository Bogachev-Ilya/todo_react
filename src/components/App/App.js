import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "../AppHeader/AppHeader";
import Searcher from "../Searcher/Searcher";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

import './App.css'

const App = () => {
    const todoData =[{label: "learn JS", important:false, id:1},
        {label: "rest", important:false, id:2},
        {label: "create React App", important:true, id:3}]
    return(<div className="todo-app">
        <AppHeader toDo={3} done={1}/>
        <div className="top-panel d-flex">
            <Searcher />
            <ItemStatusFilter />
        </div>
        <TodoList todos = {todoData}/>
    </div>)
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));