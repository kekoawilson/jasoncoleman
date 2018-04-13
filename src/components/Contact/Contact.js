import React, { Component } from 'react'
import '../../App.css'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="main style3 secondary">
				<div className="content">
					<header>
						<h2>Say Hello.</h2>
						<p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					</header>
					<div className="box">
						<form method="post" action="#">
							<div className="field half first"><input type="text" name="name" placeholder="Name" /></div>
							<div className="field half"><input type="email" name="email" placeholder="Email" /></div>
							<div className="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
							<ul className="actions">
								<li><input type="submit" value="Send Message" /></li>
							</ul>
						</form>
					</div>
				</div>
			</section>
        )
    }
}