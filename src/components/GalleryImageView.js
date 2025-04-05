import { useEffect, useState } from "react";
import fetchImage from "../utils/imageFetch"
import Divider from "./Divider";

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
                <div className="GalleryImage-content">
                    <img src={imageSrc} alt={image.title} id={image.title} className="GalleryImage"/>
                    <h3 className="GalleryImage-title">- {image.title} -</h3>
                    <p className="GalleryImage-desc">{image.desc}</p>
                    <Divider/>
                </div>
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

export default GalleryImageView;