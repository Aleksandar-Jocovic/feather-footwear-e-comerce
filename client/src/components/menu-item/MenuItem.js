import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentConatiner,
	CotnentTitle,
	CotnentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, coverImage, url, history, match }) => {
	return (
		<MenuItemContainer onClick={() => history.push(`${match.url}${url}`)}>
			<BackgroundImageContainer
				className='background-image'
				coverImage={coverImage}
			/>
			<ContentConatiner>
				<CotnentTitle>{title}</CotnentTitle>
				<CotnentSubtitle>SHOP NOW</CotnentSubtitle>
			</ContentConatiner>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
