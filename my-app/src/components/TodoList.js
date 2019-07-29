import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends Component {
    state = {
        persons:[],
    }
    componentDidMount(){
        axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`)
            .then( res  => {
                console.log(res)
                this.setState({
                    persons: res.data.slice(0,200)
                })
            })
    }
    render(){
        const {persons} = this.state;
        const personList = persons.length?(
            persons.map(person => {
                return (
                    <table key={person.id} className="center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to={'/' + person.id}>{person.id}</Link></td>
                                <td><Link to={'/' + person.id}>{person.name}</Link></td>
                            </tr>
                         </tbody>
                    </table>
                ) 
            })
        ):
            (<div>Cu tu tu dang load</div>)
        return(
            <div>{personList}</div>
        );
    }
}

export default List
