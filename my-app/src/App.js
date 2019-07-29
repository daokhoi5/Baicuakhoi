import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home/Home';
import Detail from './containers/TodoDetailScreen/Detail';
import "./App.css";
import AddPerson from './components/TodoAddPerson';

class App extends Component {
    render(){
        return(
        	<Router>   
        		<div className="App">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Detail">Detail</Link>
						</li>	
					</ul>
					<Route path='/' exact component={Home} />
					<Route path='/Home/add' exact component={AddPerson} />
					<Route path="/:person_id" component={Detail}/>
				</div>
        	</Router>
        );
    }
}

export default App;
