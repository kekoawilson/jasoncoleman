import React, { Component } from 'react'
import '../../App.css'

export default class Two extends Component {
    render() {
        return (
            <section id="two" className="main style2 left dark fullscreen">
                <div className="content box style2">
                    <header>
                        <h2>Who I Am</h2>
                    </header>
                    <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                    Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                id varius justo euismod in. Curabitur egestas consectetur magna.</p>
                </div>
                <a href="#work" className="button style2 down anchored">Next</a>
            </section>
        )
    }
}