import React, { Component } from 'react'
import "../styles/slideapp.css"
import Slider from "./Slider"
import data from "../images/Imagedata"

export default class SliderApp extends Component {

    constructor(props){
        super(props)
        this.state={
            slideIndex:0,
            arrow:"right"
        }
    }

    nextSlide(){
     this.setState({
      slideIndex:this.state.slideIndex===data.length-1?0:this.state.slideIndex+1,
      arrow:"right"
      })
    }

    prevSlide(){
        this.setState({
            slideIndex:this.state.slideIndex===0?data.length-1:this.state.slideIndex-1,
            arrow:"left"
            })
    }

    componentDidMount()
    {
        this.timer=setInterval(()=>this.autoPlay(),3000)
    }

    autoPlay()
    {
      if(this.state.arrow==="left")
      {
        this.setState(
            {
                slideIndex:this.state.slideIndex===0?data.length-1:this.state.slideIndex-1 
            }
        )
      }
      else{
        this.setState({
            slideIndex:this.state.slideIndex===data.length-1?0:this.state.slideIndex+1
        })
      }
    }

  render() {
    return (
      <div className="App1">
        <br/>
        <h1>Welcome to our  rice hub !!!</h1>
        <br/>
        <div className="container">
            <div  className="slideshow-container">
              <Slider slideIndex={this.state.slideIndex}/>
              <span className="prev" onClick={()=>this.prevSlide()}>&#10094;</span>
              <span className="next" onClick={()=>this.nextSlide()}>&#10095;</span>
            </div>
        </div>
      </div>
    )
  }
}
