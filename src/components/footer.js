import React from 'react';

const Footer = () => {
	return (
		<footer className='page-footer blue'>
			<div className='container'>
				<div className='row'>
					<div className='col l7 s12'>
						<h5 className='white-text'>Useful Resources</h5>
						<ul>
							<li>
								<a className='grey-text text-lighten-3' href='https://reactjs.org/tutorial/tutorial.html' target='_blank' rel='noopener noreferrer'>React Tutorial</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='https://reactjs.org/docs/hello-world.html' target='_blank' rel='noopener noreferrer'>React Docs</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='http://materializecss.com/' target='_blank' rel='noopener noreferrer'>MaterializeCSS</a>
							</li>
							<li>
								<a className='grey-text text-lighten-3' href='http://southpark.wikia.com/wiki/Portal:Characters' target='_blank' rel='noopener noreferrer'>Character Images</a>
							</li>
						</ul>
					</div>
					<div className='col l4 offset-l1 s12'>
						<h5 className='white-text'>GitHub</h5>
						<div className='row'>
							<div className='col s12'>
								<iframe title='Star' src='https://ghbtns.com/github-btn.html?user=erfaanism&repo=ClickyGame&type=star&count=true&size=large' frameBorder='0' scrolling='0' width='160px' height='30px'></iframe>
							</div>
							<div className='col s12'>
								<iframe title='Follow' src='https://ghbtns.com/github-btn.html?user=erfaanism&type=follow&count=true&size=large' frameBorder='0' scrolling='0' width='223px' height='30px'></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer-copyright'>
				<div className='container'>
					<span>© 2018 Ali Darvishi</span>
					<span className='right'>License MIT</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;