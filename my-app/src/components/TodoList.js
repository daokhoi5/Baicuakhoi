import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class List extends React.Component {
    state = {
        persons: [],
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
        const personList = persons.length ?(
            persons.map(person => {
                return (
                    <div className="person card" key={person.id}>
                        <div className="card-content">
                            <Link to={'/' + person.id}>
                            <span>
                                {person.id}       
                                {person.name}
                            </span>
                            </Link>
                        </div>
                    </div>
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
