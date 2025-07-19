import PageHeader from "../components/PageHeader";
import Divider from "../components/Divider";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useScrollBackground from "../hooks/useScrollBackground";
import me from "../images/me.gif";

const StartPage = () => {
    // handle animating items when they come into view
    useIntersectionObserver('li', 'animateFadeInSlideLeft');
    useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop');
    useIntersectionObserver('img', 'animatePopIn');
    // handle background scrolling
    useScrollBackground();

    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Start"/>
            </div>
            <div className="Page-content-container">
                <div className="Page-content">
                    <h3>
                        Hello,
                    </h3>
                    <p>
                        it seems as if you've stumbled upon my portfolio. Since you're already here
                        you might want to check out my work. Or not.
                    </p>
                    <img src={me} alt="Me" className="Page-gif"/>
                    <p>
                        I'm 21 years old and I like to make stuff - mainly <b>"art"</b> and <b>video games</b>
                        , hence the two sections on here. I'm also really into cinema and a huge fan of 
                        public transit, apparently.
                    </p>
                    <p>
                        Contact: <a href="mailto:wojciech.liss.contact@gmail.com" className="link">wojciech.liss.contact@gmail.com</a>
                    </p>
                    <h3>
                        <Divider text={"Work Experience"}/>
                    </h3>
                    <ul>
                        <li>
                            2025 - present <a className="link" href="https://q-loc.com/quality-assurance/">QLOC</a>
                            <br/>
                            Junior Functional Tester
                        </li>
                        <li>
                            2023 - present <a className="link" href="https://deezgames.eu">Deez Games</a>
                            <br/>
                            Programmer, Artist, Technical Artist
                        </li>
                        <li>
                            2022 Internship at a gamedev studio
                        </li>
                        <li>
                            2021 - 2023
                            Solo indie game development
                        </li>
                    </ul>
                    <h3>
                        <Divider text={"Education"}/>
                    </h3>
                    <ul>
                        <li>
                            2024 - present Gdansk University of Technology
                            <br/>
                            Computer Science
                        </li>
                        <li>
                            2019-2024 Technical School no. 4 in Gdansk
                            <br/>
                            Technician - Programmer
                        </li>
                    </ul>
                    <h3>
                        <Divider text={"Languages"}/>
                    </h3>
                    <ul>
                        <li>
                            Polish - native
                        </li>
                        <li>
                            English - CAE Grade A, C2
                        </li>
                        <li>
                            German - A2
                        </li>
                    </ul>
                    <Divider/>
                    <p className="fine-print">
                    I hereby give consent for my personal data included on this page to be processed for
                    the purposes of current and future recruitment processes, in accordance with 
                    Article 6(1)(a) of the General Data Protection Regulation (EU) 2016/679 (GDPR).
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StartPage;