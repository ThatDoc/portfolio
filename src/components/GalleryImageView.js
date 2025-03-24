const GalleryImageView = (image) => {
    return (
        <div>
            <img src={image.path} alt={image.title} id={image.title}></img>
            <p>{image.title}</p>
        </div>
    )
}

export default GalleryImageView