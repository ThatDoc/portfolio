const VideoEmbed = ({videoId, title}) => {
    return (
        <div className="VideoEmbed-container">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

export default VideoEmbed;