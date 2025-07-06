import React from 'react'
import  "./Footer1Styles.css";

export default function Footer1() {
  return (
    <>
    <div className="body-container">
        <div className="desc">
            <h1 className="title-footer">Get In Touch</h1>
            <p>Have a project in mind?let's work together to bring your ideas to life!</p>
        </div>
        <div className="info">
            <div className="email">
                <h2>Email</h2>
                <a href="https://support.google.com/mail/answer/56256?hl=en" target="_blank">siddharthmahanta853@gmail.com</a>
            </div>
            <div className="phone">
                <h2>Phone</h2>
                <p>+1(555)123-4567</p>
            </div>
            <div className="location">
                <h2>Location</h2>
                <p>Patia,Bhubaneswar</p>
            </div>
        </div>
        <div className="linkbutton">
           <a href="https://www.linkedin.com/pulse/topics/home/" target="_blank"> <button type="button" class="btn btn-outline-light mx-3" >LinkedIn</button></a>
            <a href="https://github.com/" target="_blank"><button type="button" class="btn btn-outline-light mx-3">Github</button></a>
            <a href="https://x.com/x" target="_blank"><button type="button" class="btn btn-outline-light mx-3">Twitter</button></a>
        </div>
    </div>
    </>
  )
}
