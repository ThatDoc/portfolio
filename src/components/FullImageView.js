const FullImageView = (image) => {
    return (
        <div>
            <img src={image.path} alt={image.title} id={image.title}></img>
            <p>{image.title}</p>
            <p>{image.description}</p>
        </div>
    )
}

export default FullImageView;