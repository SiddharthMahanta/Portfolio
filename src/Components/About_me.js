import React from 'react'
 import  "./About_me.css";

export default function About_me() {
  return (
    <>
    <div className="cardcontainer">
    <div className="about">
      <b><h1 className="abouttitle">ABOUT ME</h1></b>
      <p>👋 I’m Siddharth, a B.Tech student at Silicon University with a deep curiosity for both technology and the world around it. My core interests lie in web development, cybersecurity, and related tech fields—but I’m equally drawn to the study of law and history, where I explore how systems, societies, and ideas evolve.
I enjoy building things, breaking them (ethically), and understanding the rules—both digital and legal—that govern our world. Whether it’s coding a new feature, diving into cyber law, or tracing historical patterns, I’m always looking to connect dots across disciplines.
</p>
    </div>
    <div className="cards">
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">🎤Public Speaking and MUN Experience</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Confident, persuasive, and adaptable across formal and informal settings. Crafting compelling arguments, negotiating resolutions, and thinking on my feet.Understanding global issues and presenting informed viewpoints with clarity</p>
    {/* <a href="#" className="card-link">Card link</a> */}
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
  </div>
  <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">💻 Tech Interest and Skills </h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">Proficient in HTML, CSS, JavaScript, and React. I enjoy crafting responsive UIs and dynamic user experiences.Skilled in using Axios/Fetch, handling async data, and building modular, scalable components.</p>
    {/* <a href="#" className="card-link">Card link</a> */}
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">🧭 Leadership</h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p className="card-text">I view leadership as taking initiative, fostering collaboration, and staying accountable. Whether leading a project or representing a team at MUN, I focus on clear communication, problem-solving, and creating space for others to thrive. For me, leadership means stepping up, listening well, and guiding with purpose.</p>
    {/* <a href="#" className="card-link">Card link</a> */}
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
</div>

    </div>
   </div>
    </>
  )
}
