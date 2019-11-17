import React, {Component} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import Searcher from "../Searcher/Searcher";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

import './App.css'
import ItemAdder from "../ItemAdder/ItemAdder";

export default class App extends Component {
    maxId=10;
    state= {
        todoData: [
            this.createTodoItem('learn JS'),
            this.createTodoItem('rest'),
            this.createTodoItem('create React App')]
    }

    createTodoItem(label){
        return{
            label,
            important: false,
            done:false,
            id:this.maxId++
        }
    }

    deleteItem=(id)=>{
        this.setState(({todoData})=>{
            const index = todoData.findIndex((el)=>el.id===id);
            const todoDataAfterDeleted = [...todoData.slice(0, index), ...todoData.slice(index+1)]
            return{
                todoData:todoDataAfterDeleted
            }
        })};

    addItem=(label)=>{
        this.setState(({todoData})=>{
            const todoWithNewItem = [...todoData, this.createTodoItem(label)];
            return {
                todoData: todoWithNewItem
            }
        })
    };

    toggleProps (array, id, propName){
            const index = array.findIndex((el)=>el.id===id);
            //create new item from the old one and change field important
            const newItem ={...array[index], [propName]:  !array[index][propName]};
            //create new array from the state and insert updated item
            return [...array.slice(0, index),
                    newItem,
                    ...array.slice(index+1)]
    }

    toggleImportant = (id) =>{
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProps(todoData, id, 'important')
            }
        })
    };

    toggleDone = (id)=>{
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProps(todoData, id, 'done')
            }
        })
    }

    render() {

        const {todoData} = this.state;
        //filter elements with done and count
        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;

        return(<div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <Searcher />
                <ItemStatusFilter />
            </div>
            <TodoList todos = {todoData}
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.toggleImportant}
                      onToggleDone={this.toggleDone}/>

                      <ItemAdder onAddedItem={this.addItem}/>
        </div>);
    }
}