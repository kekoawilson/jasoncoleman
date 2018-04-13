import React, { Component } from 'react'
import '../../App.css'

export default class Portfolio extends Component {
    render() {
        return (
            <section id="work" className="main style3 primary">
                <div className="content">
                    <header>
                        <h2>My Work</h2>
                        <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
						Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
						arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
                    </header>

                    {/* <!-- Gallery  --> */}
                    <div className="gallery">
                        <article className="from-left">
                            <a href="../../assets/images/flooring-pics/CASR7546.JPG" className="image fit"><img src="../../assets/images/flooring-pics/CASR7546.JPG" title="Nec Consequat Mus" alt="" /></a>
                        </article>
                        <article className="from-right">
                            <a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" title="Pellentesque in" alt="" /></a>
                        </article>
                        <article className="from-left">
                            <a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" title="Nec Ornare" alt="" /></a>
                        </article>
                        <article className="from-right">
                            <a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" title="Augue in" alt="" /></a>
                        </article>
                        <article className="from-left">
                            <a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" title="Sit curabitur augue" alt="" /></a>
                        </article>
                        <article className="from-right">
                            <a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" title="Orci at" alt="" /></a>
                        </article>
                    </div>

                </div>
            </section>
        )
    }
}