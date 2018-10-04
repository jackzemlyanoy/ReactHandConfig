/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

class App extends React.Component {
  // render app
  render() {
    return (
	<div className="wrapper">
		<div>
			<h1>Hello, world!!</h1>
			<FontAwesomeIcon icon="stroopwafel" />
		</div>
	</div>
    );
  }
}

export default App;
