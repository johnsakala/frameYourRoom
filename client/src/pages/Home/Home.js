import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
// import { Fabric } from "../../components/Fabric";
import {Col, Row, Container} from "../../components/Grid";
import maylineChair from "../../components/Cards/img/mayline_chair.png";
import sauderDesk from "../../components/Cards/img/sauder_desk.png";
import Rnd from "react-rnd"
import {database} from "./firebase";


class Home extends Component {

  state = {
  	images: [maylineChair, sauderDesk ],
  	roomRatio: {
  		x: 1,
  		y: 1
  	},
  	modelsData: [
      {id: "Mayline Chair", position: {x: 0, y: 0}, size: {width: 100, height: 100}},
      {id: "Sauder Desk", position: {x: 50, y: 50}, size: {width: 100, height: 100}},
  	]
  };


  componentDidMount(){

  }

  componentDidUpdate(){
    this.updateDatabase();
  }

  updateDatabase = () =>{
    let modelsData = this.state.modelsData;
    database.ref("-L0lnD2HZtHWqW9cmZYk").set(modelsData);
  }


  render(){
    console.log("==========================", this.state);

    return(
    	<Container fluid>
    		<Row>
	        	<Col size = "col-md-10 order-md-2">
	        		<div id="arrange-room">
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
                >
                  Mayline Chair
                </Rnd>
                <Rnd
                  style={{background: "#fdf"}}
                  size={{width: this.state.modelsData[1].size.width, height: this.state.modelsData[1].size.height}}
                  position={{x: this.state.modelsData[1].position.x, y: this.state.modelsData[1].position.y}}
                  onDragStop={(e,d)=>{
                    let modelsData = Object.assign({}, this.state.modelsData);
                    modelsData[1].position.x = d.x;
                    modelsData[1].position.y = d.y;
                    this.setState({
                      modelsData
                  })}}
                >
                  Sauder Desk
                </Rnd>
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
