import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Detail extends Component{
	state = {
		person:'',
	}
	componentDidMount(){
		let id = this.props.match.params.person_id;
		axios.get('http://5d36d86c86300e0014b647c7.mockapi.io/todos/'+ id)
			.then(res => {
				this.setState({
					person: res.data
				})
			})
	}
	render(){
		const person = this.state.person ? (
			<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.person.id}</td>
                        <td>{this.state.person.name}</td>
                    </tr>
                </tbody>
            </table>
			):
		(<div>
			<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </tbody>
            </table>
		</div>)
		return(
			<div className="container center">
				<Link to="/">Back</Link>
				<br/>
				{ person }
			</div>
		)
	}
}

export default Detail