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
    }, [image.url]);

    return (
        <div>
            {imageSrc ? (
                <img src={imageSrc} alt={image.title} id={image.title}></img>
            ) : (
                <p>Loading image...</p>
            )}
            <h3>{image.title}</h3>
            <p>{image.desc}</p>
        </div>
    );
};

export default GalleryImageView;