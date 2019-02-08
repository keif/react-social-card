import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import headshot from "./../images/avatar.png";
import sand from "./../images/sand.jpg";

class App extends Component {
	render() {
		const headline = "Learning React? Start Small.";
		const name = "Rick Sanchez";

		return (
			<div className="App">
				<Card logoURL={sand} headline={headline} name={name} creditImageURL={headshot} />
			</div>
		);
	}
}

export default App;
