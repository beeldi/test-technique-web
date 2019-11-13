import React from 'react';
import './Tri.css'

class Tri extends React.Component{
    state={tri:"Domaine"}

    handleChange = (event) => {
        this.setState({tri: event.target.dataset.value});
    }

    render() {
        return (
            <div className="ui simple selection dropdown tri">
                <input type="hidden" name="gender"/>
                <i className="dropdown icon"></i>
                <div className="text">{this.state.tri}</div>
                <div className="menu" onClick={this.handleChange}>
                    <div className="item" data-value="Domaine">Domaine</div>
                    <div className="item" data-value="Nom">Nom</div>
                </div>
            </div>
        );
    }
}

export default Tri;