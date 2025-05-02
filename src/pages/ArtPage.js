import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useScrollBackground from "../hooks/useScrollBackground";

const ArtPage = () => {
    const images = useImages("art");
    
    // handle animating items when they come into view after images are loaded
    useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop');
    useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop', images.length > 0);
    useIntersectionObserver('img', 'animatePopIn', images.length > 0);
    // handle background scrolling
    useScrollBackground();

    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Art"/>
            </div>
            <div className="Page-content-container">
                <div className="Page-content">
                    <ImageGallery images={images}/>
                </div>
            </div>
        </div>
    );
}

export default ArtPage;