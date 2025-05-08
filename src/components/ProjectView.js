import { useRef, useState } from "react";
import GalleryImageView from "./GalleryImageView";
import ImageGallery from "./ImageGallery";

const ProjectView = ({project, images}) => {
    const [expanded, setExpanded] = useState(false);
    const coverRef = useRef(null);

    const projectImages = images.filter(image => image.project === project); // filter out images based on given project and skip the first one as it's later used as the project "cover"
    
    const ScrollDown = () => {
        if (!coverRef.current)
            return;
        window.scrollBy({
            top: coverRef.current.getBoundingClientRect().top + coverRef.current.getBoundingClientRect().height, // scroll down by cover image's height i.e. to the next image
            behavior: 'smooth',
        });
    }

    const ScrollUp = () => {
        if (!coverRef.current)
            return;
        window.scrollTo({
            top: coverRef.current.getBoundingClientRect().top + window.scrollY, // scroll back up to cover image
            behavior: 'smooth',
        });
    }

    const HandleClick = () => {
        setExpanded(!expanded);
        if (!expanded)
            ScrollDown();
        else
            ScrollUp();
    }

    return (
        <div className="ProjectView">
            <div ref={coverRef}>
                {<GalleryImageView image={projectImages[0]} onClick={HandleClick}/> /* first image as "cover" expanding the projct on click*/}
            </div>
            <div className="ProjectView-GalleryContainer">
                {expanded && <ImageGallery images={projectImages.slice(1)} />}
                {expanded && <button className="Navbar-link" onClick={ScrollUp}>☝︎ Top ☝︎</button>}
            </div>
        </div>
    )
}

export default ProjectView;