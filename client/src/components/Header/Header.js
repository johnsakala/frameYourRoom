import React from 'react';
import './Header.css';

const header = (props) =>{
	return (

		<div className="header">
	        <div className="headerContent">
	          <p id="logoP">
	            <a href={props.logoUrl}><img id="logo" src={props.imgSrc} alt='logo' /></a>
	            &nbsp;When you're finished arranging furniture, click <a  href={props.linkUrl} target="_blank"><span className="biggerFont"><strong id="here" >HERE</strong></span></a> to see it!
	          </p>
	        </div>
        </div>
	)
}

export default header;