import React from 'react';

import './SideNavBtn.css';

const sideNavBtn = (props) =>{
	const style = {
		top: props.top,
		backgroundColor: props.bgColor
	}

	return (
        <div id="sideBtnArea">
        	<a style={style} onClick={props.clicked}>{props.children}</a>
        </div>
	)
}

export default sideNavBtn;