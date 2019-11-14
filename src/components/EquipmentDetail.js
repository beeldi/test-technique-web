import React from 'react';
import './EquipmentDetail.css'
import CheckPointsItem from './CheckPoints.js'
import EquipmentInfos from './EquipmentInfos';
import EquipmentCarac from './EquipmentCarac';

const EquipmentDetail = ({data, checkPoints, onPreviousClick}) =>{
    var renderedList = null;

    if (checkPoints)
    (
        renderedList = Object.keys(checkPoints).map((key) => {
            return <CheckPointsItem key={key} data={checkPoints[key]}/>
        })
    )
    return (
        <div className="ui main text container">
            <button onClick={() => onPreviousClick()} className="ui labeled icon button">
            <i className="left chevron icon"></i>
                 Previous
            </button>
            <div className="ui card">
                <div className="image">
                    <img src={data.photo} alt=""/>
                </div>
                <div className="content">
                    <label className="header">{data.name}</label>
                </div>
            </div>
            <EquipmentInfos data={data}/>
            <EquipmentCarac data={data}/>
            {renderedList}
        </div>
    );
}

export default EquipmentDetail;