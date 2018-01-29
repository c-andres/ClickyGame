import React, { Component } from 'react';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: this.props.message,
		};
	};

	render() {
		return (
			<div className='navbar-fixed'>
				<nav>
					<div className='nav-wrapper row blue center-align flow-text'>
						<div className='col s4'>
							<a href='/'><b>Clicky Game</b></a>
						</div>
						<div className='col s4'>
							<span>{this.state.message}</span>
						</div>
						<div className='col s4'>
							<span>Score: {this.props.score} | Top Score: {this.props.topScore}</span>
						</div>
					</div>
				</nav>
			</div>
		);
	};
};

export default NavBar;