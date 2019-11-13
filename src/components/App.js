import React from 'react';
import SearchBar from './SearchBar'
import Tri from './Tri'
import ItemList from './ItemList'
import * as Firebase from '../firebase'
import EquipmentDetail from './EquipmentDetail';

class App extends React.Component{
    state={datas:null};

    getData = () => {
        var ref = Firebase.firebase.database().ref("Equipments/").orderByChild("Domaine");
        ref.once("value", async snapshot => {
            var response = snapshot.val();
            this.setState({datas:response});
        });
    }

    componentDidMount() {
        this.getData();
    }

    render(){
        var text = '';

        if (this.state.datas)
            text = (<ItemList machineList={this.state.datas}/>);
        else
            text = (
                <div className="ui container">
                    <div className="ui active dimmer">
                        <div className="ui text loader">Fetching datas</div>
                    </div>
                <p></p>
                </div>);
        return (
            <div>
                <EquipmentDetail {machine:'caca'}/>
                {/* <SearchBar>
                    <Tri text="effectuer un tri sur "/>
                </SearchBar>
                {text} */}
            </div>);
    }
}

export default App;