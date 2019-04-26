import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import { TestComponent } from './TestComponent'

function App() {
  	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Basic <code>xml-js</code> tests:</p>
				<TestComponent />
			</header>
		</div>
  	);
}

export default App;
