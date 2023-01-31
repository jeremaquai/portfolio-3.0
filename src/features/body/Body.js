import React from "react";
import { 
    Switch,
    Route,
 } from "react-router-dom";
import Welcome from "../../pages/welcome/Welcome";

 export default function Body() {
    return (
        <Switch>
            <Route path='/' >
                <Welcome />
            </Route>
        </Switch>
    );
 }