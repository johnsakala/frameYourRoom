import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
import {Col, Row, Container} from "../../components/Grid";
// import maylineChair from "../../components/Cards/img/mayline_chair.png";
// import sauderDesk from "../../components/Cards/img/sauder_desk.png";
// import Rnd from "react-rnd"
import Rnd from "react-rnd-rotate"
import {database} from "./firebase";


class Home extends Component {

  state = {
  	modelsData: [
      {id: "roomRatio", ratio: {x: 500, y: 300}},
      {id: "Mayline Chair", degree: 0, position: {x: 0, y: 0}, size: {width: 50, height: 50}, image: "/images/maylineChair.png", imageTop: "/images/maylineChairTop.png"},
      {id: "Sauder Desk", degree: 0, position: {x: 50, y: 50}, size: {width: 100, height: 100}, image: "/images/sauderDesk.png", imageTop: "/images/sauderDeskTop.png"},
  	],
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
                  className="room"
                  resizeGrid={[10,10]}
                  default={{
                    width: this.state.modelsData[0].ratio.x,
                    height: this.state.modelsData[0].ratio.y,
                  }}
                  onResize={(e,direction,ref,delta,position)=>{
                    let modelsData = Object.assign({}, this.state.modelsData);
                    modelsData[0].ratio.x = ref.offsetWidth;
                    modelsData[0].ratio.y = ref.offsetHeight;
                    this.setState({
                      modelsData
                    })}}
                >
                </Rnd>
                <Rnd
                  dragGrid={[10,10]}
                  default={{
                    x: this.state.modelsData[1].position.x,
                    y: this.state.modelsData[1].position.y,
                    width: this.state.modelsData[1].size.width,
                    height: this.state.modelsData[1].size.height,
                    degree: this.state.modelsData[1].degree
                  }}
                  onDragStop={(e,d)=>{
                    let modelsData = Object.assign({}, this.state.modelsData);
                    modelsData[1].position.x = d.x;
                    modelsData[1].position.y = d.y;
                    modelsData[1].degree = d.degree;
                    this.setState({
                      modelsData
                  })}}
                >
                  <img className="img-fluid" src={this.state.modelsData[1].imageTop} draggable="false" />
                </Rnd>
                <Rnd
                  dragGrid={[10,10]}
                  default={{
                    x: this.state.modelsData[2].position.x,
                    y: this.state.modelsData[2].position.y,
                    width: this.state.modelsData[2].size.width,
                    height: this.state.modelsData[2].size.height,
                    degree: this.state.modelsData[2].degree
                  }}
                  onDragStop={(e,d)=>{
                    let modelsData = Object.assign({}, this.state.modelsData);
                    modelsData[2].position.x = d.x;
                    modelsData[2].position.y = d.y;
                    modelsData[2].degree = d.degree;
                    this.setState({
                      modelsData
                  })}}
                >
                  <img className="img-fluid" src={this.state.modelsData[2].imageTop} draggable="false" />
                </Rnd>
	        		</div>
	        	</Col>

    			<Col size = "col-md-2 order-md-1">
	    			<div id="furnituresDiv">
				        <Cards
				        	src={this.state.modelsData[1].image}
				        	alt={this.state.modelsData[1].id}
				        >
				        	<h6>{this.state.modelsData[1].id}</h6>
				        </Cards>
                <Cards
                  src={this.state.modelsData[2].image}
                  alt={this.state.modelsData[2].id}
                >
                  <h6>{this.state.modelsData[2].id}</h6>
                </Cards>              
				    </div>
	        	</Col>
	        </Row>
	    </Container>
      )
  }

}

export default Home;
