import React, { Component } from "react";
import logo from './logo.svg';
import './styles.css';

//Main layout of the application, idk 
export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {this.props.children}
                </header>
            </div>
        );
    }
}