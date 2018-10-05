import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
	static propTypes = {
	  article: PropTypes.shape({
	    id: PropTypes.string.isRequired,
	    title: PropTypes.string.isRequired,
	    text: PropTypes.string.isRequired,
	  }).isRequired,
	}

	render() {
	  const { article, isOpen, toggleOpen } = this.props;
	  return (
			<div ref = {this.setContainerRef}>
				<h3>{article.title}</h3>
				<button onClick={toggleOpen}>
					{isOpen ? 'close' : 'open'}
				</button>
				{this.getBody()}
			</div>
	  );
	}

	setContainerRef = (ref) => {
	  this.container = ref;
	  console.log(ref);
	}

	getBody() {
	  const { article, isOpen } = this.props;
	  if (!isOpen) return null;
	  return (
			<section>
				{article.text}
			</section>
	  );
	}
}

export default Article;
