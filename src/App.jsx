import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import Research from "./Pages/Research";
import Gamedev from "./Pages/Gamedev";


//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Research" component={Research} />
                    <Route path="/Games" component={Gamedev} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;

