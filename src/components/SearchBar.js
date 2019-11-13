import React from 'react';
import './SearchBarChild.css'

class SearchBar extends React.Component{
    state = {search : ''};

    onInputChange = (event) => {
        this.setState({search: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

    };

    render() {
        var prop = this.props.children;
        var text;

        if (prop)
        {
            text = (
                <div className="SearchBarChild"> 
                    <label>{this.props.children.props.text}</label>
                    {this.props.children}
                </div>
            )
        }
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Rechercher de Machines</label>
                        <input
                            type='text'
                            value={this.state.search}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
                {text}
            </div>
        );
    };
}

export default SearchBar;