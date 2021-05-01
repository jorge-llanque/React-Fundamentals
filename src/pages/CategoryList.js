import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './styles/CategoryList.css'

export default class CategoryList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="Categories">
                    <h1>Choose One</h1>
                    <div className="Categories__card">
                        <h2>Luxury</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                    <div className="Categories__card">
                        <h2>Cheap</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                    <div className="Categories__card">
                        <h2>Expansive</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                    <div className="Categories__card">
                        <h2>Normal</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                    <div className="Categories__card">
                        <h2>Terrible</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                    <div className="Categories__card">
                        <h2>Fine</h2>
                        <p>Lorem</p>
                        <Link to="/categories/category" className="Categories__card-button">Click Me</Link>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
