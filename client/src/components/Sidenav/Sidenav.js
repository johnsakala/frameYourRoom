import React from "react";
import "./Sidenav.css";

export const Sidenav = props => {

	return(

		<div id="mySidenav" className="sidenav">
			<a href="javascript:void(0)" className="closebtn" onClick={()=>props.closeNav()}>&times;</a>
			{props.children}
		</div>
             
    );
}


