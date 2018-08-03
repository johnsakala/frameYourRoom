import React from "react";
import "./Furniture.css";

const furniture = props => {

	return(

		<div className="furniture" id={props.id}>
		  <img className="card-img-top" src={props.src} alt={props.alt} />
		  <div className="card-body">
		    {props.children}
		    <button id={props.buttonId} 
		    		className={props.className}
		    		onClick={props.clicked}
		    >
		     {props.buttonText}
		    </button>
		  </div>
		</div>
             
    );
}


export default furniture;