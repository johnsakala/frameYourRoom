import React, { Component } from "react";
import "./Furniture.css";

import PropTypes from 'prop-types';

class Furniture extends Component{
	render(){
		return(

			<div className="furniture">
			  <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
			  <div className="card-body">
			    {this.props.children}
			    <button id={this.props.buttonId} 
			    		className={this.props.className}
			    		onClick={this.props.clicked}
			    >
			     {this.props.buttonText}
			    </button>
			  </div>
			</div>
	             
	    );
	}
}

Furniture.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	children: PropTypes.array,
	buttonId: PropTypes.string,
	className: PropTypes.string,
	clicked: PropTypes.func,
	buttonText: PropTypes.string
}

export default Furniture;