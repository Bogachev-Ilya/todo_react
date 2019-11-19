import React, {Component} from "react";
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {
    state={
        status:''
    };

    buttons=[{name:'all', label:'All'}, {name:'active', label:'Active'}, {name:'done', label:'Complete'}]

    onClick=(state)=>{}

    render() {
        const {todoState, todoStateChange} = this.props;
        const buttons = this.buttons.map(({name, label})=>{
            //if todoState from props equals to btn name than active
            const isActive = todoState ===name;
            const classButton = isActive?'btn-info':'btn btn-outline-secondary';
            return (
                <button type="button" className={`btn ${classButton}`}
                        key={name}
                        onClick={()=>todoStateChange(name)}
                        >{label}</button>)
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};