import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { HEADERPATHS } from "../../data/Paths";

export default function Header() {
    return (
        <header>
            <div className="pageTitle" >
                <h1>
                    Jeremaquai's Portfolio
                </h1>
            </div>
            <div className="nav">
                <div className="link">
                    <Link to={ HEADERPATHS.welcome } >
                        WELCOME
                    </Link>
                </div>
                <div className="link">
                    <Link to={ HEADERPATHS.about } >
                        ABOUT ME
                    </Link>
                </div>
                <div className="link">
                    <Link to={ HEADERPATHS.projects } >
                        PROJECTS
                    </Link>    
                </div>
                <div className="link">
                    <Link to={ HEADERPATHS.contact } >
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </header>
    );
}