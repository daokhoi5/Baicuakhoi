import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Detail extends React.Component{
	state = {
		person: '',
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
	 // onDelete(){
  //   let id = this.state.person.id;
  //   axios.delete('http://5d36d86c86300e0014b647c7.mockapi.io/todos/'+ id)
  //   .then(response => {
  //   this.props.history.push('/');
  //   })
  //   .catch(err=>console.log(err));
  //   }
	render(){
		const backHome = (
		<div>
		<Link to="/">Back</Link>
		</div>
		)
		const person = this.state.person ? (
			<div className="border-dep">
				<span className="center"><b>Name:</b> <em>"{this.state.person.name}"</em></span>
				<br/> 
				<p><b>ID:</b> <em>"{this.state.person.id}"</em></p>
			</div>
			):
		( <div className="border-dep">
				<span className="center"><b>Name:</b> <em></em></span>
				<br/> 
				<p><b>ID:</b> <em></em></p>
			</div>)
		return(
			<div className="container">
				<button>{backHome}</button>
				<br/>
				{ person }
			    <button onClick={this.onDelete} className="btn blue">Xóa</button>
			</div>
		)
	}
}

export default Detail