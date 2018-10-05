/* eslint-disable no-undef */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import ArticleList from '../ArticleList';

class App extends React.Component {
  // render app
  render() {
    return (
	<div className="wrapper">
		<div>
			<h1>Hello, world!!</h1>
			<FontAwesomeIcon icon="stroopwafel" />
		</div>
		<ArticleList articles = {this.props.articles} />
	</div>
    );
  }
}

export default App;
