import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddPerson extends Component{
 state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
	event.preventDefault();
	axios.post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`, {
	name: this.state.name
	})
	.then(res => {
	console.log(res);
	console.log(res.data);
	})
   }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default AddPerson
