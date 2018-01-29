import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import NavBar from './components/navbar';
import Cover from './components/cover';
import Container from './components/container';
import Footer from './components/footer';

const characters = ['Butters', 'Eric', 'Ike', 'Kenny', 'Kyle', 'Lisa', 'Liza', 'Maria', 'Phillip', 'Premise', 'Schwartz', 'Shelly', 'Stan', 'Timmy', 'Token', 'Wendy'];

const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange'];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: 'Click an image to begin!',
			score: 0,
			topScore: 0,
			characters: characters,
			selectedCharacters: []
		};
	};

	shuffleCharacters() {
		this.setState({ characters: _.shuffle(characters) });
	};

	checkForDuplicate(name) {
		if (this.state.selectedCharacters.indexOf(name) === -1) {
			this.state.selectedCharacters.push(name);
			this.setState({ score: this.state.score + 1, info: 'Correct!' });
			if (this.state.score > this.state.topScore) {
				this.setState({ topScore: this.state.score });
			};
		} else {
			console.log('Wrong!');
			this.setState({ topScore: this.state.score, score: 0, selectedCharacters: [], info: 'Wrong!' });
		}
		this.shuffleCharacters();
	};

	handleSelectCharacters(name) {
		console.log(name);
		this.checkForDuplicate(name);
		console.log(this.state.selectedCharacters);
	};

	render() {
		return (
			<div>
				<NavBar
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.info}
				/>
				<Cover />
				<Container
					colors={colors}
					characters={this.state.characters}
					onImageClick={name => { this.handleSelectCharacters(name) }}
				/>
				<Footer />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
