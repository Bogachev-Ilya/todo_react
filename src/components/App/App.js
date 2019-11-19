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
            this.createTodoItem('create React App')],
        searchValue:'',
        todoState:'all'
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
    };

    filterArrayByState=(array, todoState)=>{
        switch (todoState) {
            case 'all':
                return array;
            case 'done':
                return array.filter((el)=>el.done);
            case 'active':
                return array.filter((el)=>!el.done);
            default:return array
        }
    }

    //set search value to state
    setSearchValue = (searchValue) => {
        this.setState( {searchValue})
    };
    //filter array by searchValue
    searchTodo =(array, searchValue)=>{
        if(searchValue.length===0){
            return array;
        }
        return array.filter((el)=>{
                return el.label.toLowerCase().includes(searchValue)
        })
    };

    //set todoState for filtering
    todoStateChange =(todoState)=>{
        this.setState({todoState})
    }


    render() {
        const {todoData, searchValue, todoState} = this.state;
        const searchedTodoList =this.filterArrayByState((this.searchTodo(todoData, searchValue)),todoState)
        //filter elements with done and count
        const doneCount = todoData.filter((el)=>el.done).length;
        const todoCount = todoData.length - doneCount;

        return(<div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <Searcher onSearch={this.setSearchValue}/>
                {/*send status filter to component*/}
                <ItemStatusFilter todoState={todoState}
                                todoStateChange={this.todoStateChange}/>
            </div>
            <TodoList todos = {searchedTodoList}
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.toggleImportant}
                      onToggleDone={this.toggleDone}/>

                      <ItemAdder onAddedItem={this.addItem}/>
        </div>);
    }
}