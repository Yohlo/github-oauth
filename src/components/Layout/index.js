import React from "react";
import logo from './logo.svg';
import './styles.css';

/**
 * 
 * Layout is the main layout of the application. Each route follows this
 * layout.
 * 
 * @param Children
 * 
 */
const Layout = ({ children }) => 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {children}
        </header>
    </div>;

export default Layout