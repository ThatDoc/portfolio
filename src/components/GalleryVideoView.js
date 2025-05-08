import Divider from "./Divider";
import VideoEmbed from "./VideoEmbed";

const GalleryVideoView = ({video}) => {
    return (
        <div className="GalleryImage-container">
            <div className="GalleryImage-content">
                <VideoEmbed videoId={video.id} title={video.title} />
                <h3 className="GalleryImage-title">{video.title}</h3>
                <p className="GalleryImage-desc">{video.desc}</p>
                <Divider/>
            </div>
        </div>
    );
};

export default GalleryVideoView;