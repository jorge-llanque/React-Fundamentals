import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Container">
                    <Link to="/categories" className="Container__button">Get Start</Link>
                </div>
            </React.Fragment>
        )
    }
}
