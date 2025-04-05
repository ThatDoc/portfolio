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
            </div>
        </div>
    );
}

export default StartPage;