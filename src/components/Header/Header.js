import React, { Component } from 'react'
import '../../App.css'

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <h1>Catalyst Coatings</h1>
                <nav>
                    <ul>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#one">What I Do</a></li>
                        <li><a href="#two">Who I Am</a></li>
                        <li><a href="#work">My Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}