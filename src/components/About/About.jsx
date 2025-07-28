import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img1 from '../../assets/profile_img1.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tittle">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img1} alt="" height={320} width={320}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi! I'm a passionate Front-End Developer with a strong focus on crafting clean, user-friendly, and responsive web interfaces. I specialize in turning ideas into interactive digital experiences using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React, Vue, or Next.js.</p>
                    <p>When I’m not coding, you’ll find me exploring new tech, solving UI challenges, or experimenting with side projects to level up my skills.</p>
                </div>
                    <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>C </p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <   div className="about-skill"><p>Core Java</p><hr style={{width:"80%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>1</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>3</h1>
                <p>PROJECTS COMPELETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>4</h1>
                <p>TEAMS HAPPY</p>
            </div>
            
        </div>
    </div>
  )
}

export default About