import React from 'react';
import Tri from './Tri'
import ItemList from './ItemList'
import * as Firebase from '../firebase'
import EquipmentDetail from './EquipmentDetail';

class App extends React.Component{
    state={datas:null, selectedData:null, checkPoints:null};

    getData = () => {
        var ref = Firebase.firebase.database().ref("Equipments/").orderByChild("name");
        ref.once("value", snapshot => {
            var items = [];
            snapshot.forEach((child) => {
              items.push({
                name: child.val().name,
                building: child.val().building,
                domain: child.val().domain,
                niveau: child.val().niveau,
                local: child.val().local,
                photo: child.val().photo,
                brand: child.val().brand,
                model: child.val().model,
                serialNumber: child.val().serialNumber,
                quantity: child.val().quantity,
                status: child.val().status,
                notes: child.val().notes,
                nbFaults: child.val().nbFaults,
                _key:child.key,
              });
            });
            this.setState({datas:items});
        });
    }

    componentDidMount() {
        this.getData();
    }

    onItemSelect = (data) => {
        var ref = Firebase.firebase.database().ref("Checkpoints/").orderByChild("equipmentKey").equalTo(data._key);
        ref.on("value", snapshot => {
            var response = snapshot.val();
            this.setState({selectedData:data, checkPoints:response});
        });
    }

    onPreviousClick = () => {
        this.setState({selectedData:null, checkPoints:null});
    }

    onTriggerTri = (value) => {
        var tri;
        if (value === 'name')
        {
            tri = this.state.datas.sort((a, b) => {
                if (a.name === b.name) return 0;
                    return a.name > b.name ? 1 : -1;
            });
        }
        else
        {
            tri = this.state.datas.sort((a, b) => {
                if (a.domain === b.domain) return 0;
                    return a.domain > b.domain ? 1 : -1;
            });
        }
        this.setState({datas:tri});
    }

    render(){
        var text = '';

        if (this.state.datas)
            text = (<ItemList onItemSelect={this.onItemSelect} machineList={this.state.datas}/>);
        else
            text = (
                <div className="ui container">
                    <div className="ui active dimmer">
                        <div className="ui text loader">Fetching datas</div>
                    </div>
                <p></p>
                </div>);
        if(this.state.selectedData)
                return(<EquipmentDetail data={this.state.selectedData} checkPoints={this.state.checkPoints} onPreviousClick={this.onPreviousClick}/>);
        else
            return (
                <div className="search-bar centered ui segment">
                    Effectuer un tri sur : 
                    <Tri onTriggerTri={this.onTriggerTri} text="effectuer un tri sur "/>
                    {text}
                </div>);
    }
}

export default App;