import React from 'react'

const EquipmentInfos = ({data}) => {
    return (
        <div className="ui segment">
            <h1 className='ui header'>
                Informations sur l'équipement 
            </h1>
            <div className='ui vertical segment'>
                Domaine : {data.domain}
            </div>
            <div className='ui vertical segment'>
                Nom du batiment : {data.building}
            </div>
            <div className='ui vertical segment'>
                Dernier statut constaté : {data.status}
            </div>
            <div className='ui vertical segment'>
                Nombre de défauts : {data.nbFaults}
            </div>
        </div>);
}


export default EquipmentInfos