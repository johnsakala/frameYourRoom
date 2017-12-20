import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
// import { Fabric } from "../../components/Fabric";
import {Col, Row, Container} from "../../components/Grid";
import chair from "../../components/Cards/img/chair.png";
import Rnd from "react-rnd"
import {database} from "./firebase";


class Home extends Component {

  state = {
  	images: [chair, "./img/desk.png"],
  	roomRatio: {
  		x: 1,
  		y: 1
  	},
  	modelsData: [
  		{id: "Desk Chair", position: {x: 0, y: 0}, size: {width: 100, height: 100}},
  	]
  };


  componentDidMount(){

  }

  componentDidUpdate(){
    this.updateDatabase();
  }

  updateDatabase = () =>{
    let modelsData = this.state.modelsData;
    database.ref().push(modelsData);
  }


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
                    x:this.state.modelsData[0].position.x,
                    y:this.state.modelsData[0].position.y,
                    width:320,
                    height:200
                  }}
                >
                  Rnd
                </Rnd>
                <Rnd
                  style={{background: "#fff"}}
                  size={{width: this.state.modelsData[0].size.width, height: this.state.modelsData[0].size.height}}
                  position={{x: this.state.modelsData[0].position.x, y: this.state.modelsData[0].position.y}}
                  onDragStop={(e,d)=>{
                    let modelsData = Object.assign({}, this.state.modelsData);
                    modelsData[0].position.x = d.x;
                    modelsData[0].position.y = d.y;
                    this.setState({
                      modelsData
                  })}}
                >2nd box</Rnd>
	        		</div>
	        	</Col>

    			<Col size = "col-md-2 order-md-1">
	    			<div id="furnituresDiv">
				        <Cards
				        	src={this.state.images[0]}
				        	alt={this.state.modelsData[0].id}
				        >
				        	<h6>{this.state.modelsData[0].id}</h6>
				        </Cards>
				    </div>
	        	</Col>
	        </Row>
	    </Container>
      )
  }

}

export default Home;
