import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/questionnaire">Küsimustike Haldamine</Link>
                </li>
                {/* <li>
                    <Link to="/deploy">Küsimustike Kasutamine</Link>
                </li>
                <li>
                    <Link to="/results">Tulemuste Analüüs</Link>
                </li> */}
            </ul>
        </nav>
    );
};