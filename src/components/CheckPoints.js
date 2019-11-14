import React from 'react'

const CheckPointsItem= ({data}) => {
    var checkPoints = data;
    var fault = null;
    var photo = null;
    var recommandation = null;

    if (data.photo)
        photo = (<div className='item-content'>
                    <img className = "ui big image" src={data.photo} alt=""/>
                </div>);
    if (data.recommandation)
        recommandation = (<div className='item-content'>
                            <label>recommendations : {checkPoints.recommandation}</label>
                        </div>);
    if (data.fault)
        fault = (<div className='item-content'>
                    <label>faults : {checkPoints.fault}</label>
                </div>);
    return (
        <div className="ui inverted centered segment grid">
            <div className="nine wide column">
                <label className="ui circular red label">{checkPoints.name}</label>
                <br/>
                {fault}
                {recommandation}
                {photo}
            </div>
        </div>);
}

export default CheckPointsItem;