import React from 'react'
import './Hero.css'
import profile_img1 from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img1} alt="" height={320} width={320}/>
        <h1><span>I,m Mr Abhi,</span> frontend developer based in India.</h1>
        <p>I am a frontend developer from Karnataka, India</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href="/Abhi_Resume.pdf" download="Abhi_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
            My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero