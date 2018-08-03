import React from "react";
import "./SideNav.css";

export const sidenav = props => {

	return(

		<div id="mySidenav" className="sidenav">
			<a href="" className="closebtn" onClick={(event)=>props.closeNav(event)}>&times;</a>
			{props.children}
		</div>
             
    );
}

export default sidenav;
