import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddPerson from '../../components/TodoAddPerson';
import RemovePerson from '../../components/TodoRemovePerson';
import List from '../../components/TodoList';

class Home extends React.Component {
    render(){
        return(
        	<div className="container">
                <AddPerson/>
                <RemovePerson />
                <h5>Danh sach Hooman</h5>
            	<List/>
            </div>
        );
    }
}

export default Home
