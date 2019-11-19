import React, {Component} from "react";
import './Searcher.css';

export default class Searcher extends Component {
    state={
        label:''
    };

    onChange=(e)=>{
        const label = e.target.value.toLowerCase();
        this.setState({label})
        this.props.onSearch(this.state.label)
    }

    render(){
        return(
            <div>
                <input className="search-input" placeholder="search" onChange={this.onChange}  value={this.state.label}/>
            </div>)
    }
}