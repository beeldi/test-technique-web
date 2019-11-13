import React from 'react';
import SearchBar from './SearchBar'
import Tri from './Tri'
import * as firebase from '../firebase'

class App extends React.Component{

    onTermSubmit = async search => {
        const rootRef = firebase.firebase.database().ref();
       
    }

    render(){

        return (
                <SearchBar onFormSubmit={this.onTermSubmit}>
                    <Tri text="effectuer un tri sur "/>
                </SearchBar>
        );
    }
}

export default App;