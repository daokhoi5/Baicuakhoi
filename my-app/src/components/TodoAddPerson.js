import React, { Component } from 'react';
import axios from 'axios';

class AddPerson extends Component{
    state = {
        name: '',
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`,{
           name: this.state.name
        })
        this.componentDidMount();

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name Add:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
    )
  }
}
export default AddPerson
