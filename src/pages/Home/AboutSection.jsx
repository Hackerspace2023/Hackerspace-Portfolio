import React from 'react'
import "../../css/aboutSection.css"
import { Button } from '../../components'

const AboutSection = () => {
    return (
        <section className="about">
            <div className='titleContainer'>
                <span className='tagAbout tagAbout1'>{`<h2>`}</span>
                <h1 className='title'>About US</h1>
                <span className='tagAbout tagAbout2'>{`</h2>`}</span>
            </div>
            <div className='aboutContent'>
                <div className='aboutText'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting been the industrys standard dummy text Lorem Ipsum is simply dummy text of the simply dummy text of the simply dummy text of the printing and simply dummy text of the typesetting industry. Lorem Ipsum has been</p>
                </div>
                <div className="aboutLogo"></div>
                <div className='aboutButton'>
                    <Button text="Learn More" to={"/about"} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection