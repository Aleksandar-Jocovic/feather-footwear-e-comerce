import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {
	sekectHomeMenuSections,
	selectHomeMenuSections
} from '../../redux/home-menu/home-menu.selectors';

import menuData from './menu-data';
import MenuItem from '../menu-item/MenuItem';

import './home-menu.styles.css';

const HomeMenu = ({ sections }) => (
	<div className='home-menu'>
		{sections.map(({ id, ...otherProps }) => (
			<MenuItem key={id} {...otherProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectHomeMenuSections
});
export default connect(mapStateToProps)(HomeMenu);
