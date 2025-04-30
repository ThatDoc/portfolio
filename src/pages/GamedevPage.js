import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const GamedevPage = () => {
    const images = useImages("gamedev");

    // handle animating items when they come into view after images are loaded
    useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop', images.length > 0);
    useIntersectionObserver('img', 'animatePopIn', images.length > 0);

    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Gamedev"/>
            </div>
            <p>
                I've been developing games since 2021. Initially, I started with my own project, progress of which
                I covered on <a className="link" href="https://www.youtube.com/@dociuu">my YouTube channel</a>.
            </p>
            <p>
                Now, I'm working at <a className="link" href="https://deezgames.eu">Deez Games</a> on <a className="link" href="https://store.steampowered.com/app/2923270/BabushCats/">BabushCats</a> mainly 
                on animations, UI, art, VFX and coding.
            </p>
            <ImageGallery images={images}/>
        </div>
    );
}

export default GamedevPage;