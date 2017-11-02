import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
    	<header className='header'>
    		<div>
    			<input type="text" placeholder="Name" />
    			<input type="number" placeholder="Age" />
    			<input type="email" placeholder="Email" />
    			<button>ADD FRIEND</button>
    		</div>
    	</header>
    );
  }
}
