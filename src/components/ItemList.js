import React from 'react';
import Item from './Item';

const ItemList = ({machineList}) => {
    const renderedList = Object.keys(machineList).map((key) => {
        return <Item key={key} data={machineList[key]}/>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default ItemList;