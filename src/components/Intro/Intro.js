import React, { Component } from 'react'
import '../../App.css'
import logo from '../../assets/images/logos/logo-01.jpg'

export default class Intro extends Component {
    render() {
        return (
            <section id="intro" className="main style1 dark fullscreen">
                <div className="content">
                    <header>
                        {/* <h2>Hello.</h2> */}
                        <img className='logo' src={logo} />
                    </header>
                    <p>Residential and Commercial Concrete Coatings</p>
                    <footer>
                        <a href="#one" className="button style2 down">More</a>
                    </footer>
                </div>
            </section>
        )
    }
}