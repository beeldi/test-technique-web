import React from 'react';
import Item from './Item';

const ItemList = ({machineList, onItemSelect}) => {
    const renderedList = Object.keys(machineList).map((key) => {
        return <Item onItemSelect={onItemSelect} key={key} data={machineList[key]}/>
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default ItemList;