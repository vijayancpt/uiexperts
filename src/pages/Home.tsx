import { useRef } from "react";

import './home.scss';
let logo = `${process.env.PUBLIC_URL}/assets/uiexperts-logo.png`;
let homeImg = `${process.env.PUBLIC_URL}/assets/home3.jpg`;
let sec1Img = `${process.env.PUBLIC_URL}/assets/group-design.jpg`;
let visionImg = `${process.env.PUBLIC_URL}/assets/ai.webp`;
let focusImg = `${process.env.PUBLIC_URL}/assets/our-focus.png`;

let expertsImg = `${process.env.PUBLIC_URL}/assets/group-design.jpg`;
let linkedInImg = `${process.env.PUBLIC_URL}/assets/linked-in.png`;

export const Home = () => {
    const divRef = useRef();
    return (
        <div className="main-container">
            <div className="header-section">
                <div className="header-info">
                    <img className="logo" src={logo}></img>
                    <h1 className="header-title">Synergy of UI Minds</h1>
                    {/* <img className="head-img" src={homeImg} /> */}
                </div>
            </div>
            <div className="body-section">
                <section className="vision">
                    <div className="sec1-col1">
                        {/* <h1>Our Vision</h1> */}
                        <p>
                            Evolution of Internet has empowered Business to cater the need of increase in users community across globe by adopting Digital Transformation
                        </p>
                        <p>
                            User Interface is the front face of applications developed for Desktop, Smart Phone, Smart TV, Smart Watches and other smart appliances
                        </p>
                        <p>
                            UI Technologies are undergoing rapid changes for every year and developer community has to upskill to meet the industry standard
                        </p>
                        <p>
                         Innovation, Collaboration and Adoption are ineveitable in UI Domain
                        </p>
                    </div>
                    <div className="sec1-col2" >
                        <img className="sec1-img" src={visionImg}></img>
                    </div>
                </section>

                {/* <VisionSection /> */}
                <ExpertsSection />
                <OurFocusSection />
            </div>
            <FooterSection/>
            
            
        </div>
    )
}

const VisionSection = () => {
    return (
        <section className="sec2">
            <div className="sec2-col1">
                <h1>Our Vision</h1>
                <img className="sec2-col1-img" src={visionImg} />
            </div>
            <div className="sec2-col2">

            </div>
        </section>
    )
}


const OurFocusSection = () => {
    return (
        <section className="focus">
            <div className="sec3-col1">
                {/* <h1>What we do</h1> */}
                {/* <p>
                    To bring UI Experts from Technical and domain background for the collaboration and rapid adoption in UI domain.
                    Innovation capability in a sustainable way
                </p> */}
            </div>
            <div className="sec3-col2">
                <img className="sec3-col2-img" src={focusImg} />
            </div>
        </section>
    )
}


const ExpertsSection = () => {
    return (
        <section className="experts">
            <div className="sec4-col1">
                <img className="sec4-col1-img" src={expertsImg} />
            </div>
            <div className="sec4-col2">
                <p>
                    We are network of UI Experts, Architects, <br></br> Leads and Developers across Globe
                </p>
                <p >
                {/* for the Innovation, Collaboration and Adoption in UI Domain */}
                    {/* Experts / Architects / Leads will get direct membership Developers and Freshers will need a mentors for membership Portfolio Page */}
                </p>
            </div>
        </section>
    )
}


const FooterSection = ()=>{
    return(
        <div className="footer-section">
                <h2>Contact Us</h2>
                {/* <span> &#169; UI Trendz Private Limited <a href="http://www.uitrendz.com">www.uitrendz.com</a></span> */}
                <div className="footer-content">
                <div>
                <a href="https://www.linkedin.com/company/ui-experts-network/" target={'_blank'}>
                    <span style={{ fontSize: '2rem', color: 'white', margin: '9px' }}><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
                </a>
                </div>
                <div className="cp-text">&#x2709; uiexperts.net@gmail.com</div>
                
                </div>
            </div>
    )
}