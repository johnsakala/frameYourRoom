import React from 'react';

import './SideNavBtn.css';

const sideNavBtn = (props) =>{
	const style = {
		top: props.top,
		backgroundColor: props.bgColor
	}

	return (
        <div id="sideBtnArea">
        	<a style={style} onClick={props.clicked}>&nbsp;&nbsp;{props.children}&nbsp;</a>
        </div>
	)
}

export default sideNavBtn;