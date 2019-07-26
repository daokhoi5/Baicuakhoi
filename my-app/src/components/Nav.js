import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
	render(){
		const Nav =(
					<ul>
					<li><Link to="/" className="dep">>Home</Link></li>
					<li><Link to="/Detail" classNam="dep">Detail</Link></li>
					</ul>)
		return(
			<div>
				{Nav}
			</div>
		)
	}
}
export default Nav