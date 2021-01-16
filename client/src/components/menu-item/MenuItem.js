import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.css";

const MenuItem = ({ title, coverImage, url, history, match }) => {
	return (
		<div
			className="menu-item"
			onClick={() => history.push(`${match.url}${url}`)}
		>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${coverImage})`,
				}}
			/>
			<div className="content">
				<div className="title">{title}</div>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
