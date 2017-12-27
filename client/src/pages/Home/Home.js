import React, { Component } from "react";
import "./Home.css";
import { Cards } from "../../components/Cards";
import {Col, Row, Container} from "../../components/Grid";
// import maylineChair from "../../components/Cards/img/mayline_chair.png";
// import sauderDesk from "../../components/Cards/img/sauder_desk.png";
// import Rnd from "react-rnd"
import Rnd from "react-rnd-rotate";
import {database} from "./firebase";



class Home extends Component {

  state = {
    allData: [
      {arrayId: 1, buttonId: "button1", id: "Mayline Chair", className: "btn btn-primary", buttonText: "Add to scene", dimensions: "55 W, 55 D, 55 H cm", degree: 0, position: {x: 10, y: 10}, size: {width: 50, height: 50}, image: "/images/maylineChair.png", imageTop: "/images/maylineChairTop.png"},
      {arrayId: 2, buttonId: "button2", id: "Sauder Desk", className: "btn btn-primary", buttonText: "Add to scene", dimensions: "55 W, 55 D, 55 H cm", degree: 0, position: {x: 50, y: 50}, size: {width: 100, height: 50}, image: "/images/sauderDesk.png", imageTop: "/images/sauderDeskTop.png"},
    ],
  	modelsData: [
      {arrayId: 0, id: "roomRatio", degree: 0, position: {x: 0, y: 0}, size: {width: 500, height: 300}, imageTop: "/images/floor.jpg"},
  	],
  };


  componentDidMount(){

  }

  // update db everytime dom update
  componentDidUpdate(){
    this.updateDatabase();
  }

  // update db method
  updateDatabase = () =>{
    let modelsData = this.state.modelsData;
    database.ref("-L0lnD2HZtHWqW9cmZYk").set(modelsData);
  }

  // add furniture to scene on button clicked when it's not in scene
  // remve furniture from scene on button click when it is in scene
  handlesAddFurnitureButton = (arrayId, buttonId) =>{
    console.log("add btn was clicked");
    console.log("arrayId: ",arrayId);

    // find index in array
    let index = 0;
    index = this.state.modelsData.findIndex(x => x.arrayId === arrayId);

    console.log("index", index);

    // did id found in array?
    index === -1 ?
      this.addFurniture(arrayId, buttonId)
     : (
        this.state.modelsData[index].className = "btn btn-primary",
        this.state.modelsData[index].buttonText = "Add to scene",
        this.removeFurniture(arrayId, buttonId, index)
      )
  }

  // add data to array modelsData
  addFurniture = (arrayId, buttonId) =>{
    let newFurnitureInfo = this.state.allData[arrayId - 1];
    // change text on button and className
    newFurnitureInfo.className = "btn btn-danger";
    newFurnitureInfo.buttonText = "remove";
    let modelsData = this.state.modelsData;
    modelsData.push(newFurnitureInfo);
    console.log("modelsData",modelsData);

    // change button style with buttonId
    // let targetBtn = document.querySelector(`#${buttonId}`);
    // targetBtn.setAttribute("className", "");

    this.setState({
      modelsData: modelsData,
    });
  }

  // remove data from array modelsData
  removeFurniture = (arrayId, buttonId, index) =>{
    let modelsData = this.state.modelsData;
    modelsData.splice(index, 1);
    this.setState({
      modelsData: modelsData
    }) ;
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
                  buttonText={value.buttonText}
                  className={value.className}
                  handlesAddFurnitureButton={this.handlesAddFurnitureButton}
                >
                  <h6>{value.id}</h6>
                  <p>{value.dimensions}</p>
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
