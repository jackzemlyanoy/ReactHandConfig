/* eslint-disable no-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default class Popover extends React.Component {
	static propTypes = {
	  isOpen: PropTypes.bool,
	};

	static defaultProps = {
	  isOpen: false,
	  className: '',
	  renderTittle: PropTypes.func.isRequired,
	  children: PropTypes.func.isRequired,
	};

	constructor(props) {
	  super(props);

	  this.state = {
	    isOpen: false,
	  };
	}

	showContent = () => {
	  this.setState({
	    isOpen: true,
	  });
	};

	hideContent = () => {
	  this.setState({
	    isOpen: false,
	  });
	};

	render() {
	  const { className, renderTitle, children } = this.props;
	  const { isOpen } = this.state;
	  const cn = classNames('Popover', className, {
	    isOpen,
	  });

	  return <div
				className={cn}
				onMouseOver={this.showContent}
				onMouseOut={this.hideContent}
				>
			<div className="Popover--tittle">{ renderTitle(this.props, this.state) }</div>
			<div className="Popover--content">
				{ children(this.props, this.state) }
			</div>
		</div>;
	}
}
