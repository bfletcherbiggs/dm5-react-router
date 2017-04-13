import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import router from "./router";

class App extends Component {
	render() {
		console.log( this.props );
		return (
			<div className="app">
				{ router }
			</div>
		);
	}
}

export default App;
