import React, { Component } from "react";

import "./Home.css";
import Furnitures from "../../components/Furnitures/Furnitures";
import SideNav from "../../components/SideNav/SideNav";
import Rnd from "react-rnd-rotate";
import {database} from "./firebase";
import Header from '../../components/Header/Header';
import Ruler from '../../components/Ruler/Ruler';
import SideNavBtn from '../../components/SideNavBtn/SideNavBtn';

class Home extends Component {

  state = {
    counter: 0,
    allData: [
      {arrayId: 1, buttonId: "button1", id: "mayline-chair", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "74 W, 74 D, 110 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 74, height: 74}, image: "/images/maylineChair_prod.png", imageTop: "/images/maylineChair_top.png"},
      {arrayId: 2, buttonId: "button2", id: "sauder-desk", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "150 W, 65 D, 110 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 150, height: 65}, image: "/images/sauderDesk_prod.png", imageTop: "/images/sauderDesk_top.png"},
      {arrayId: 3, buttonId: "button3", id: "bil-bookcase", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "80 W, 28 D, 106 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 80, height: 28}, image: "/images/BIL_bookcase_prod.jpg", imageTop: "/images/BIL_Bookcase_top.png"},
      {arrayId: 4, buttonId: "button4", id: "kal-shelf", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "86 W, 39 D, 147 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 86, height: 39}, image: "/images/KAL_Shelf_unit_prod.jpg", imageTop: "/images/KAL_Shelf_unit_top.png"},
      {arrayId: 5, buttonId: "button5", id: "pot-uplighter", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "28 W, 28 D, 174 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 28, height: 28}, image: "/images/POT_uplighter_prod.jpg", imageTop: "/images/POT_uplighter_top.png"},
      {arrayId: 6, buttonId: "button6", id: "moto-uplighter", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "28 W, 28 D, 174 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 28, height: 28}, image: "/images/MOTO_Uplighter_prod.jpg", imageTop: "/images/MOTO_uplighter_top.png"},
      {arrayId: 7, buttonId: "button7", id: "karl-sofa", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "205 W, 93 D, 80 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 205, height: 93}, image: "/images/KARLS_Sofa_prod.jpg", imageTop: "/images/KARLS_Sofa_top.png"},
      {arrayId: 8, buttonId: "button8", id: "vim-sofa", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "241 W, 98 D, 80 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 241, height: 98}, image: "/images/VIM_Sofa_prod.png", imageTop: "/images/VIM_Sofa_top.png"},
      {arrayId: 9, buttonId: "button9", id: "picture-frame-a", z: 3, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "200 W, 30 D, 140 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 200, height: 20}, image: "/images/Picture_A_prod.png", imageTop: "/images/picture_A_top.png"},
      {arrayId: 10, buttonId: "button10", id: "ham-rug", z: 1, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "160 W, 230 L cm", degree: 0, position: {x: 250, y: 50}, size: {width: 160, height: 230}, image: "/images/HAM_Rug_prod.png", imageTop: "/images/HAM_Rug_top.png"},
      {arrayId: 11, buttonId: "button11", id: "brim-closet", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "117 W, 50 D, 190 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 117, height: 50}, image: "/images/BRIM_closet_prod.png", imageTop: "/images/BRIM_closet_top.png"},
      {arrayId: 12, buttonId: "button12", id: "mel-tv-unit", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "183 W, 47 D, 57 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 183, height: 47}, image: "/images/MEL_TV_unit_prod.png", imageTop: "/images/MEL_TV_unit_top.png"},
      {arrayId: 13, buttonId: "button13", id: "picture-frame-b", z: 3, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "140 W, 30 D, 100 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 140, height: 20}, image: "/images/pictureB_prod.png", imageTop: "/images/pictureB_top.png"},
      {arrayId: 14, buttonId: "button14", id: "stock-rug", z: 1, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "170 W, 240 L cm", degree: 0, position: {x: 250, y: 50}, size: {width: 170, height: 240}, image: "/images/STOCK_Rug_prod.png", imageTop: "/images/STOCK_Rug_top.png"},
      {arrayId: 15, buttonId: "button15", id: "snes-bed", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "167 W, 213 D, 120 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 167, height: 213}, image: "/images/SNES_Bed_prod.png", imageTop: "/images/SNES_Bed_top.png"},
      {arrayId: 16, buttonId: "button16", id: "nes-closet", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "120 W, 59 D, 197 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 120, height: 59}, image: "/images/NES_closet_prod.jpg", imageTop: "/images/NES_closet_top.png"},
      {arrayId: 17, buttonId: "button17", id: "coffee-table", z: 2, className: "btn btn-primary btn-sm", buttonText: "Add to scene", dimensions: "90 W, 55 D, 45 H cm", degree: 0, position: {x: 250, y: 50}, size: {width: 90, height: 55}, image: "/images/Coffee_table.jpg", imageTop: "/images/Coffee_table_top.png"},
    ],
  	modelsData: [
      {arrayId: 0, id: "roomRatio", z: 1 , degree: 0, position: {x: 0, y: 0}, size: {width: 600, height: 350}, imageTop: "/images/floor.jpg"},
  	],
  }

  // update db everytime dom update
  componentDidUpdate(){
    this.updateDatabase();
    // console.log("updating db");
  }

  // update db method
  updateDatabase = () =>{
    let modelsData = [...this.state.modelsData];
    database.ref("-L0lnD2HZtHWqW9cmZYk").set(modelsData);
  }

  // add furniture to scene on button clicked when it's not in scene
  // remve furniture from scene on button click when it is in scene
  // change btn className
  handlesAddFurnitureButton = (arrayId, buttonId) =>{
    // find index in array
    let index = this.state.modelsData.findIndex(x => x.arrayId === arrayId);

    // did id found in array?
    if(index === -1){
      this.addFurniture(arrayId, buttonId)      
    }
    else{
      const modelsData = [...this.state.modelsData];
      
      const allData = [...this.state.allData];
      allData[arrayId -1].className = "btn btn-primary btn-sm";
      allData[arrayId -1].buttonText = 'Add to scene';

      this.setState({
        allData: allData,
        modelsData: modelsData
      });

      this.removeFurniture(arrayId, buttonId, index)      
    }
  }

  // add furniture data to array modelsData
  // change btn className
  addFurniture = (arrayId, buttonId) =>{
    const newFurnitureInfo = {...this.state.allData[arrayId -1]};
    const modelsData = [...this.state.modelsData];
    modelsData.push(newFurnitureInfo);

    const allData = [...this.state.allData];
    allData[arrayId -1].className =  "btn btn-danger btn-sm";
    allData[arrayId -1].buttonText = 'remove';

    this.setState({
      allData: allData,
      modelsData: modelsData,
    });
  }

  // remove data from array modelsData
  removeFurniture = (arrayId, buttonId, index) =>{
    let modelsData = [...this.state.modelsData];
    modelsData.splice(index, 1);
    this.setState({
      modelsData: modelsData
    }) ;
  }

  // open sidenav
  openNav = () =>{
    document.querySelector("#mySidenav").style.left='0';    
  }

  // close sidenav
  closeNav = (event) =>{
    event.preventDefault();
    document.querySelector("#mySidenav").style.left='-200px';    
  }
  
  openVR = () =>{
    window.open("https://furnsmart.hitcapstone.com/vr-room/");
  }

  render(){
    // console.log("==========================", this.state);

    // render instruction img on arrangement area
    const renderInstruction = <img className="instruction" 
                                alt='instruction'
                                onClick={() => {
                                  // console.log("closed");
                                  const instructionImg = document.querySelector(".instruction");
                                  instructionImg.style.display = "none";
                                }} 
                                src="/images/instruction.png" 
                              />;

    // render furnitures and a room img in arrangement area
    // check if the data is furniture or a room
    const renderProps = this.state.modelsData.map((value,i)=>{
                        if(value.id === 'roomRatio'){
                          return (
                            <Rnd
                               z={value.z}
                                key={value.arrayId}
                                className="room"
                                resizeGrid={[10,10]}
                                default={{
                                  width: value.size.width,
                                  height: value.size.height,
                                }}
                                onResize={(e,direction,ref,delta,position)=>{
                                  let modelsData = [...this.state.modelsData];
                                  modelsData[i].size.width = ref.offsetWidth;
                                  modelsData[i].size.height = ref.offsetHeight;
                                  // console.log("in map modelsData: ", modelsData);
                                  this.setState({
                                    modelsData: this.state.modelsData
                                  })}}
                              >
                            </Rnd>
                          )
                        }
                        else{
                          return (
                            <Rnd
                              z={value.z}
                              key={value.arrayId}
                              dragGrid={[10,10]}
                              default={{
                                x: value.position.x,
                                y: value.position.y,
                                width: value.size.width,
                                height: value.size.height,
                                degree: value.degree
                              }}
                              onDrag={(e, d) => {
                                let locationData = {x: d.x, y:d.y};
                                database.ref("-L0lnD2HZtHWqW9cmZYk/" + i + "/position").set(locationData);
                              }}
                              onDragStop={(e,d)=>{
                                let modelsData = [...this.state.modelsData];
                                modelsData[i].position.x = d.x;
                                modelsData[i].position.y = d.y;
                                modelsData[i].degree = d.degree;
                                this.setState({
                                  modelsData: this.state.modelsData
                              })}}
                            >
                              <img className="img-fluid" alt={value.id} src={value.imageTop} draggable="false" />
                            </Rnd>
                          )
                        }
                      });

    return(
      <div>
        <Header 
          logoUrl={'https://furnsmart.hitcapstone.com/entrance/'}
          imgSrc={"/images/logo.png"}
          linkUrl={"https://furnsmart.hitcapstone.com/vr-room/"}/>

        <SideNavBtn
          clicked={this.openNav}
          top='80px'
          bgColor='#385bfc'
        >
          <i className="fas fa-list-ul"></i>
        </SideNavBtn>

        <SideNavBtn
          clicked={this.openVR}
          top='160px'
          bgColor='#11f702'
        >
          <strong>vr</strong>
        </SideNavBtn>

        <div id='furnitureDiv'>
          <Furnitures 
            allData={this.state.allData}
            clicked={this.handlesAddFurnitureButton} />  
        </div>      

        <SideNav  closeNav={this.closeNav}>
          <Furnitures 
            allData={this.state.allData}
            clicked={this.handlesAddFurnitureButton} />
        </SideNav>

        <div id='rulerDiv'>
          <Ruler>
            {renderInstruction}
            {renderProps}
          </Ruler>
        </div>

      </div>
      )
  }

}

export default Home;


