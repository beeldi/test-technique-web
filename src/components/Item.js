import React from 'react'
import './Item.css'

const Item = ({data, onItemSelect}) => {
    var machine = data;

    return (
        <div onClick={() => onItemSelect(data)} id="item" className="ui item inverted segment grid">
            <div className="four wide column">
                <img className = "ui big image" src={machine.photo} alt=""/>
            </div>
            <div className="nine wide column">
                <label className="ui circular red label">{machine.name}</label>
                <br/>
                <div className='item-content'>
                    <label>Domaine : {machine.domain}</label>
                    <br/>
                    <label>Nombres de défaults : {machine.nbFaults}</label>
                </div>
            </div>
        </div>);
}

export default Item;