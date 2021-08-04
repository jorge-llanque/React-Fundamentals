import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import './styles/CategoryList.css'

/*
 useLocation -> me devuelve un objeto con las caracteristicas del url
 useHistory -> navega entre url
*/


export default function CategoryList() {
    const location = useLocation()
    const history = useHistory()
    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get("skip")) || 0
    const limit = parseInt(query.get("limit")) || 10
    console.log(skip, limit)

    const handleNext = () => {
        query.set("skip", skip + limit)
        history.push({search: query.toString()})
    }
    
    return (
        <div>
            <button onClick={handleNext} >Next</button>
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
        </div>
    )
}