import React from "react";
import "./Cards.css";

export const Cards = props => {

	return(

		<div className="card">
		  <img className="card-img-top myImages" src={props.src} alt={props.alt} />
		  <div className="card-block">
		    {props.children}
		  </div>
		</div>
             
    );
}


