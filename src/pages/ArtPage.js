import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ArtPage = () => {
    // handle animating items when they come into view
    useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop');
    useIntersectionObserver('img', 'animatePopIn');

    const images = useImages("art");
    
    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Art"/>
            </div>
            <ImageGallery images={images}/>
        </div>
    );
}

export default ArtPage;