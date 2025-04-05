import GalleryImageView from "./GalleryImageView"
import GalleryVideoView from "./GalleryVideoView"

const ImageGallery = ({images}) => {
    return (
        <div>
            {images.map((image, index) => {
                return image.type === "image"
                ? <GalleryImageView image={image} key={index} />
                : <GalleryVideoView video={image} key={index} />
        })}
        </div>
    )
}

export default ImageGallery;