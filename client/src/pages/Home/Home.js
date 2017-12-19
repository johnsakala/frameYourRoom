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
  	roomRatio: {
  		x: 1,
  		y: 1
  	},
  	dummyData: [
  		{name: "chair", position: {x: 0, y: 0}, size: {width: 200, height: 100}},
  	]
  };


  // componentDidMount(){
  // }



  render(){
    console.log("==========================", this.state);

    return(
    	<Container fluid>
    		<Row>
	        	<Col size = "col-md-10 order-md-2">
	        		<div id="arrange-room">
                <Rnd
                  style={{background:"#ddd"}}
                  bounds="parent"
                  default={{
                    x:this.state.dummyData[0].position.x,
                    y:this.state.dummyData[0].position.y,
                    width:320,
                    height:200
                  }}
                >
                  Rnd
                </Rnd>
                <Rnd
                  style={{background: "#fff"}}
                  size={{width: this.state.dummyData[0].size.width, height: this.state.dummyData[0].size.height}}
                  position={{x: this.state.dummyData[0].position.x, y: this.state.dummyData[0].position.y}}
                  onDragStop={(e,d)=>{
                    let dummyData = Object.assign({}, this.state.dummyData);
                    dummyData[0].position.x = d.x;
                    dummyData[0].position.y = d.y;
                    this.setState({
                      dummyData
                  })}}
                >2nd box</Rnd>
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
