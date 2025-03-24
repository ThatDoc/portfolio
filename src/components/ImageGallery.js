import GalleryImageView from "./GalleryImageView"

const ImageGallery = ({images}) => {
    return (
        <div>
            {images.map((image, index) => {
                <GalleryImageView image={image} key={index} />
            })}
        </div>
    )
}

export default ImageGallery;