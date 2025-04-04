import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";

const ArtPage = () => {
    const images = useImages();

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