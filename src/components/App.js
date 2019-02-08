import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import headshot from "./../images/avatar.png";
import sand from "./../images/sand.jpg";

class App extends Component {
	render() {
		const headline = "Learning React? Start Small.";
		const name = "Rick Sanchez";
		const message = "Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps.";
		const url = "https://baker.af";
		const linkName = "baker.af";

		return (
			<div className="App">
				<Card
					logoURL={sand}
					headline={headline}
					name={name}
					creditImageURL={headshot}
					message={message}
					url={url}
					linkName={linkName}
				/>
			</div>
		);
	}
}

export default App;
