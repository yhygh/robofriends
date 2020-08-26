import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''			
		}
		// console.log('1: constructor');
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( users => 
				this.setState({robots: users}));
			// console.log('2: didmount');

	}

    onSearchChange = (event) => {
    	this.setState( {searchField: event.target.value});
    }

	render() {
		const { robots, searchField } = this.state;
    	const filterRobots = robots.filter(robot => {
    		return robot.name.toLowerCase().includes(searchField.toLowerCase());
    	})
		console.log('3: render');

		if (!robots.length) {
			return <h1>Loading</h1>
		}

		return (
		  <div className='tc'>
			<h1 className="f2">RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filterRobots}/>
				</ErrorBoundry>
			</Scroll>
		  </div>
		);
	}
}

export default App;