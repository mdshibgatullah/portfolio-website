import React from 'react';
import './Hero.css'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import HeroImg from '../../assets/image/hero.jpeg'

const Hero = () => {
    return (
        <section className='hero' id='home'>
           <div className="hero-details">
            <h1>Md. Shibgatullah Sifat</h1>
            <h2>I'm a <span>Web Developer</span></h2>
            <p>A motivated Full Stack Web Developer with strong knowledge of HTML, CSS, JavaScript, React.js, PHP, and Laravel. Passionate about building responsive, user-friendly web applications and continuously learning new technologies.</p>
            <div className="btn-sci">
                <a href="#contact" className='btn'>Contact Me</a>
                <div className="sci">
                    <a href="https://www.linkedin.com/in/md-shibgatullah-sifat-9ba022351/"><FaLinkedin /></a>
                    <a href="https://github.com/mdshibgatullah"><FaGithub /></a>
                    <a href="https://web.facebook.com/hs.sifat.9"><FaFacebook /></a>
                </div>
            </div>
           </div>

           <div className='hero-img'>
            <div className="img-box">
                <div className="img-item">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
           </div>
        </section>
    );
};

export default Hero;
