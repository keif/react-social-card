import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import card from "./../data/card";
import headshot from "./../images/avatar.png";
import sand from "./../images/sand.jpg";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Card
					logoURL={sand}
					headline={card.headline}
					name={card.name}
					creditImageURL={headshot}
					message={card.message}
					url={card.url}
					urlDisplayName={card.urlDisplayName}
					linkName={linkName}
				/>
			</div>
		);
	}
}

export default App;
