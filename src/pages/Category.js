import React, { Component } from 'react'
import './styles/Category.css'

export default class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="Category">
                    <h1>Nombre_Categoria</h1>
                    <p>Description category</p>
                    <button>Volver</button>
                </section>
            </React.Fragment>
        )
    }
}
