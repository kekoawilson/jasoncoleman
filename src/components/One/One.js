import React, { Component } from 'react'
import '../../App.css'

export default class One extends Component {
    render() {
        return (
            <section id="one" className="main style2 right dark fullscreen">
                <div className="content box style2">
                    <header>
                        <h2>What I Do</h2>
                    </header>
                    <p>Catalyst Coatings is a new company specializing in residential concrete coatings. We offer services for Garage Floor Coatings and Driveway Sealings.</p>
                </div>
                <a href="#two" className="button style2 down anchored">Next</a>
            </section>
        )
    }
}