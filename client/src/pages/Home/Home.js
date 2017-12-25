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
      {arrayId: 0, id: "roomRatio", degree: 0, position: {x: 0, y: 0}, size: {width: 500, height: 300}, imageTop: "/images/floor.jpg"},
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
                {this.state.modelsData.map((value,i)=>{
                  return (
                    value.id === "roomRatio" ?
                     (
                   <Rnd
                    key={value.arrayId}
                    className="room"
                    resizeGrid={[10,10]}
                    default={{
                      width: value.size.width,
                      height: value.size.height,
                    }}
                    onResize={(e,direction,ref,delta,position)=>{
                      let modelsData = Object.assign({}, this.state.modelsData);
                      modelsData[i].size.width = ref.offsetWidth;
                      modelsData[i].size.height = ref.offsetHeight;
                      console.log("in map modelsData: ", modelsData);
                      this.setState({
                        modelsData: this.state.modelsData
                      })}}
                  >
                  </Rnd>
                      ): (
                  <Rnd
                    key={value.arrayId}
                    dragGrid={[10,10]}
                    default={{
                      x: value.position.x,
                      y: value.position.y,
                      width: value.size.width,
                      height: value.size.height,
                      degree: value.degree
                    }}
                    onDragStop={(e,d)=>{
                      let modelsData = Object.assign({}, this.state.modelsData);
                      modelsData[i].position.x = d.x;
                      modelsData[i].position.y = d.y;
                      modelsData[i].degree = d.degree;
                      this.setState({
                        modelsData: this.state.modelsData
                    })}}
                  >
                    <img className="img-fluid" alt={value.id} src={value.imageTop} draggable="false" />
                  </Rnd>
                      ));

                })}
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
