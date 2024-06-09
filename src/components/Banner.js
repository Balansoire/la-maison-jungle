import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Banner.css';

function Banner({ children }) {
	return (
		<div className='lmj-banner'>{children}</div>
	)
}

Banner.propTypes = {
	children: PropTypes.node.isRequired
};

export default Banner;
