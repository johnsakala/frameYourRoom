import React from "react";
import "./Furnitures.css";

import Furniture from './Furniture/Furniture';

const furnitures = (props) =>{

	return (
		<div className="furnituresDiv">
			{props.allData.map(value=>{
				return <Furniture
		                src={value.image}
		                alt={value.id}
		                key={value.arrayId}
		                buttonId={value.buttonId}
		                buttonText={value.buttonText}
		                className={value.className}
		                clicked={()=>props.clicked(value.arrayId, value.buttonId)}
		              >
		                <h6>{value.id}</h6>
		                <p>{value.dimensions}</p>
		              </Furniture>
			})}
		</div>
    )
}


export default furnitures