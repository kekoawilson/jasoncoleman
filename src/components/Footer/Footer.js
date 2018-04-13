import React, { Component } from 'react'
import '../../App.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">

				{/* <!-- Icons --> */}
					<ul className="actions">
						<li><a href="#" className="icon fa-twitter" target='_blank'><span className="label">Twitter</span></a></li>
						<li><a href="https://www.facebook.com/catalystcoatings/" className="icon fa-facebook" target='_blank'><span className="label">Facebook</span></a></li>
						<li><a href="https://www.instagram.com/catalystcoatings/" className="icon fa-instagram" target='_blank'><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-linkedin" target='_blank'><span className="label">LinkedIn</span></a></li>
						{/* <li><a href="#" className="icon fa-dribbble" target='_blank'><span className="label">Dribbble</span></a></li> */}
						{/* <li><a href="#" className="icon fa-pinterest" target='_blank'><span className="label">Pinterest</span></a></li> */}
					</ul>

				{/* <!-- Menu --> */}
					<ul className="menu">
						<li>&copy; Catalyst Coatings</li>
					</ul>

			</footer>
        )
    }
}