import ImageGallery from "../components/ImageGallery";

const ArtPage = ({images}) => {
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