import React from 'react'

const EquipmentCarac = ({data}) => {
    return (
        <div className="ui segment">
            <h1 className='ui header'>
                Caractéristiques de l'équipement
            </h1>
            <div className='ui vertical segment'>
                Numéro de série : {data.serialNumber}
            </div>
            <div className='ui vertical segment'>
                Model : {data.model}
            </div>
            <div className='ui vertical segment'>
                Marque : {data.brand}
            </div>
        </div>
    );
}

export default EquipmentCarac;