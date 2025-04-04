import { useEffect, useState } from "react";
import fetchImage from "../utils/imageFetch"

const GalleryImageView = ({image}) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const fetchedImageUrl = await fetchImage(image.path);
            setImageSrc(fetchedImageUrl);
        };
        loadImage();
    }, [image.path]);

    return (
        <div className="GalleryImage-container">
            {imageSrc ? (
                <div>
                    <img src={imageSrc} alt={image.title} id={image.title} className="GalleryImage"/>
                    <h3>- {image.title} -</h3>
                    <p>{image.desc}</p>
                </div>
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

export default GalleryImageView;