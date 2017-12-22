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
    allData: [
      {arrayId: 0, buttonId: "button0", id: "Mayline Chair", degree: 0, position: {x: 10, y: 10}, size: {width: 50, height: 50}, image: "/images/maylineChair.png", imageTop: "/images/maylineChairTop.png"},
      {arrayId: 1, buttonId: "button1", id: "Sauder Desk", degree: 0, position: {x: 50, y: 50}, size: {width: 100, height: 100}, image: "/images/sauderDesk.png", imageTop: "/images/sauderDeskTop.png"},
    ],
  	modelsData: [
      {id: "roomRatio", ratio: {x: 500, y: 300}},
      {arrayId: 0, id: "Mayline Chair", degree: 0, position: {x: 10, y: 10}, size: {width: 50, height: 50}, image: "/images/maylineChair.png", imageTop: "/images/maylineChairTop.png"},
      {arrayId: 1, id: "Sauder Desk", degree: 0, position: {x: 50, y: 50}, size: {width: 100, height: 100}, image: "/images/sauderDesk.png", imageTop: "/images/sauderDeskTop.png"},
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

  handlesAddFurnitureButton = (arrayId, buttonId) =>{
    console.log("add btn was clicked");
    console.log("arrayId: ",arrayId);

    let newFurnitureInfo = this.state.allData[arrayId];
    let modelsData = this.state.modelsData;
    modelsData.push(newFurnitureInfo);
    console.log("modelsData",modelsData);

    // toggle button with buttonId
    let targetBtn = document.querySelector(`#${buttonId}`);
    targetBtn.setAttribute("disabled", "");

    this.setState({
      modelsData: modelsData,
    });
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

              {this.state.allData.map((value)=>(
                <Cards
                  arrayId={value.arrayId}
                  src={value.image}
                  alt={value.id}
                  key={value.arrayId}
                  buttonId={value.buttonId}
                  handlesAddFurnitureButton={this.handlesAddFurnitureButton}
                >
                  <h6>{value.id}</h6>
                </Cards>
              ))}


            
				    </div>
	        	</Col>
	        </Row>
	    </Container>
      )
  }

}

export default Home;
