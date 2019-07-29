import React, { Component } from 'react';
import AddPerson from '../../components/TodoAddPerson';
import RemovePerson from '../../components/TodoRemovePerson';
import List from '../../components/TodoList';

class Home extends Component {
    render(){
        return(
        	<div className="container">
                <AddPerson/>
                <RemovePerson />
                <h3>Danh sach Hooman:</h3>
            	<List/>
            </div>
        );
    }
}

export default Home
