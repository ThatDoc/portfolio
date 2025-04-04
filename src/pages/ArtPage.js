import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";

const ArtPage = () => {
    const images = useImages();

    return (
        <div className="Page-container">
            <div>
                <h2> - Art - </h2>
            </div>
            <ImageGallery images={images}/>
        </div>
    );
}

export default ArtPage;