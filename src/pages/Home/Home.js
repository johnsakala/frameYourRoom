import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
// import { Fabric } from "../../components/Fabric";
import {Col, Row, Container} from "../../components/Grid";
import chair from "../../components/Cards/img/chair.png";
import Rnd from "react-rnd"


class Home extends Component {

  state = {
  	images: [chair, "./img/desk.png"],
  	name: ["Desk Chair", "Worker Desk"],
  	size: ["40 W 48 D 83 H cm", "180 W x 90 D x 73 H cm"],
  	roomRatio: {
  		x: 1,
  		y: 1
  	},
  	dummyData: [
  		{name: "chair", position: {x: 0, y: 0}}
  	]
  };


  // componentDidMount(){
  // }



  render(){
    return(
    	<Container fluid>
    		<Row>
	        	<Col size = "col-md-10 order-md-2">
	        		<div id="arrange-room">
              <Rnd
                style={{background:"#ddd"}}
                bounds="parent"
                default={{
                  x:0,
                  y:0,
                  width:320,
                  height:200
                }}
              >
                Rnd
              </Rnd>
	        		</div>
	        	</Col>

    			<Col size = "col-md-2 order-md-1">
	    			<div id="furnituresDiv">
				        <Cards
				        	src={this.state.images[0]}
				        	alt={this.state.name[0]}
				        >
				        	<h6>{this.state.name[0]}</h6>
				        </Cards>
				    </div>
	        	</Col>
	        </Row>
	    </Container>
      )
  }

}

export default Home;
