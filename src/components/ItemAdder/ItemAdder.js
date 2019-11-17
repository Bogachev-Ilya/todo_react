import React, {Component} from 'react';
import './ItemAdder.css'

export default class ItemAdder extends Component {
    state={
      label:''
    };

    onLabelChange=(event)=>{
        this.setState({
                label: event.target.value
            })
    };

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onAddedItem(this.state.label);
        this.setState(
            {label:''
            })
    };

    render(){
        return(
            <form className="item-adder"
                onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Add new TODO"
                       //control value
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary">Add item</button>
            </form>)
    };
}