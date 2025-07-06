import React from 'react'
import img1 from '../images/hero.png'
 import  "./HeroStyles.css";

export default function Hero() {
  return (
  <div className="herocontainer">
      <div className="contents">
    <h1>Hi,I'm Siddharth</h1>
  
    <p>I'm a btech student studying at Silicon University Bhubaneswar</p>
    <button type="button" class="btn btn-warning">View My Work</button>
    <button type="button" class="btn btn-outline-light mx-2">Get In Touch</button>
    </div>
    <img src={img1} alt="sorry" className="image" />
    </div>
  )
}
