import ImageGallery from "../components/ImageGallery";
import useImages from "../hooks/useImages";
import PageHeader from "../components/PageHeader";

const GamedevPage = () => {
    const images = useImages("gamedev");

    return (
        <div className="Page-container">
            <div className="PageHeader-container">
                <PageHeader title="Gamedev"/>
            </div>
            <ImageGallery images={images}/>
        </div>
    );
}

export default GamedevPage;