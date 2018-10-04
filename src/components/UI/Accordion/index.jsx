import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export default class Accordion extends React.PureComponent {
	static propTypes = {
	  children: PropTypes.func.isRequired,
	};

	constructor(props) {
	  super(props);

	  this.state = {
	    currentPanelId: null,
	  };
	}

  toggleOpen = (panelId) => {
    this.setState({
      currentPanelId: panelId,
    });
  };

  render() {
    const { children } = this.props;
    return (
		<div className="Accordion">
			{children(this.props, this.state, this.toggleOpen)}
		</div>
	  );
  }
}
