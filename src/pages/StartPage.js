import PageHeader from "../components/PageHeader";

const StartPage = () => {
    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Start"/>
                <h3>
                    Hello,
                </h3>
                <p>
                    it seems as if you've stumbled upon my portfolio. Since you're already here
                    you might want to check out my work. Or not.
                </p>
                <p>
                    I'm 21 years old and I like to make stuff - mainly <b>"art"</b> and <b>video games</b>
                    , hence the two sections on here. I'm also really into cinema and a huge fan of 
                    public transit, apparently.
                </p>
                <h3>
                    <b>Work Experience</b>
                </h3>
                <p>
                    <ul>
                        <li>
                            2021 - 2023
                            Solo indie game development
                        </li>
                        <li>
                            2023 - now <a className="link" href="https://deezgames.eu">Deez Games</a>
                            <br/>
                            Programmer, Artist, Technical Artist
                        </li>
                    </ul>
                </p>
                <h3>
                    <b>Education</b>
                </h3>
                <p>
                    <ul>
                        <li>
                            2019-2024 Technical School no. 4 in Gdansk
                            <br/>
                            Technician - Programmer
                        </li>
                        <li>
                            2024 - now Gdansk University of Technology
                            <br/>
                            Informatics
                        </li>
                    </ul>
                </p>
                <h3>
                    <b>Languages</b>
                </h3>
                <p>
                    <ul>
                        <li>
                            Polish - native
                        </li>
                        <li>
                            English - CAE Grade A, C2
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default StartPage;