import React from 'react';
import './ItemAdder.css'

const ItemAdder = ({onAddedItem})=> {
    return(
        <div className="item-adder">
        <button className="btn btn-outline-secondary" onClick={()=>onAddedItem('Added')}>Add item</button>
        </div>)
};

export default ItemAdder;