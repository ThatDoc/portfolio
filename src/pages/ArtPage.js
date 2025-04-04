import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";

const ArtPage = () => {
    const images = useImages();

    return (
        <div>
            <div>
                <a> Art </a>
            </div>
            <ImageGallery images={images}/>
        </div>
    );
}

export default ArtPage;