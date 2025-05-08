import { useMemo, useEffect, useState } from "react";
import fetchImage from "../utils/imageFetch"
import Divider from "./Divider";
import useDotLoading from "../hooks/useDotLoading";
import imageLoadingTexts from "../utils/imageLoadingTexts";

const GetImageLoadingText = () => {
    return imageLoadingTexts[Math.floor(Math.random() * (imageLoadingTexts.length))];
}

const GalleryImageView = ({image, onClick}) => {
    const [imageSrc, setImageSrc] = useState(null);
    const loadingText = useMemo(() => GetImageLoadingText(), []);
    const dots = useDotLoading();

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
                    <div className="TextOverlayWrapper">
                        <img src={imageSrc} alt={image.title} id={image.title} className="GalleryImage" onClick={onClick}/>
                        {onClick && <div className="OverlayText">☞</div>}
                    </div>
                    <h3 className="GalleryImage-title">- {image.title} -</h3>
                    <p className="GalleryImage-desc">{image.desc}</p>
                    <Divider/>
                </div>
            ) : (
                <p>{loadingText}{dots}</p>
            )}
        </div>
    );
};

export default GalleryImageView;