import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useEffect } from "react";

const ArtPage = () => {
    const images = useImages("art");
    
    // handle animating items when they come into view after images are loaded
    useEffect(() => {
        if (images.length > 0) {
            useIntersectionObserver('h1, h2, h3, p', 'animateFadeInSlideTop');
            useIntersectionObserver('img', 'animatePopIn');
        }
    }, [images]);

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