import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/AppHeader";
import Searcher from "./components/Searcher";
import TodoList from "./components/TodoList";

const App = () => {
    const todoData =[{label: "learn JS", important:false, id:1},
        {label: "rest", important:false, id:2},
        {label: "create React App", important:true, id:3}]
    return(<div>
        <AppHeader />
        <Searcher />
        <TodoList todos = {todoData}/>
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));