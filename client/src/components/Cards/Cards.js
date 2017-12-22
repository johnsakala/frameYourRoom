import React from "react";
import "./Cards.css";

export const Cards = props => {

	return(

		<div className="card" id={props.id}>
		  <img className="card-img-top myImages" src={props.src} alt={props.alt} />
		  <div className="card-body">
		    {props.children}
		    <button id={props.buttonId} className="btn btn-primary" 
		    		onClick={()=>{props.handlesAddFurnitureButton(props.arrayId, props.buttonId)}}>Add to Scene
		    </button>
		  </div>
		</div>
             
    );
}


