import React from "react";
import "./Svg.css";

export const Fabric = (props) =>{
	return(
		<canvas {...props}>{props.children}</canvas>
		)

}
	 
