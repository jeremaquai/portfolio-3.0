import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




export default function Footer() {
    return (
        <footer>
            <div className="devContact">
                <h2>&copy;Jeremaquai2023</h2>
            </div>
            <div>
                <FontAwesomeIcon icon={solid('user-secret')} />
                <FontAwesomeIcon icon={regular('coffee')} />
                <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
                <FontAwesomeIcon icon={brands('twitter')} />
            </div>
        </footer>
    );
}