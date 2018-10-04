import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ className, type }) => {
  const cn = classNames('fas', className, `fa-${type}`);
  return <i className={ cn } />;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
};

export default Icon;
