import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

	componentDidMount(){
		setInterval(function(){
			const flashItem = document.querySelector("#here");
			flashItem.style.color = (flashItem.style.color === "rgb(255, 60, 0)" ? "rgb(59, 113, 252)" : "rgb(255, 60, 0)");
		}, 500);
	}

	render(){

		const style = {
			color: "rgb(255, 60, 0)"
		}

		return(
			<div className="header">
		        <div className="headerContent">
		          <p id="logoP">
		            <a href={this.props.logoUrl}><img id="logo" src={this.props.imgSrc} alt='logo' /></a>
		            &nbsp;When you're finished arranging furniture, click <a  href={this.props.linkUrl} target="_blank"><span className="biggerFont"><strong style={style} id="here" >HERE</strong></span></a> to see it!
		          </p>
		        </div>
	        </div>
		)
	}
}

export default Header;











// const header = (props) =>{

// 	const style = {
// 		color: "rgb(255, 60, 0)",
// 	}

// 	setInterval(function(){
// 		const flashItem = document.querySelector("#here");
// 		flashItem.style.color = (flashItem.style.color === "rgb(255, 60, 0)" ? "rgb(59, 113, 252)" : "rgb(255, 60, 0)");
// 	}, 500);

// 	return (

// 		<div className="header">
// 	        <div className="headerContent">
// 	          <p id="logoP">
// 	            <a href={props.logoUrl}><img id="logo" src={props.imgSrc} alt='logo' /></a>
// 	            &nbsp;When you're finished arranging furniture, click <a  href={props.linkUrl} target="_blank"><span className="biggerFont"><strong style={style} id="here" >HERE</strong></span></a> to see it!
// 	          </p>
// 	        </div>
//         </div>
// 	)
// }

// export default header;