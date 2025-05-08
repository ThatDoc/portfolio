const fetchImage = async (imagePath) => {    
    try {
    const response = await fetch(
        `https://api.github.com/repos/ThatDoc/portfolio-images/contents/images/${imagePath}?ref=main`,
        {
        headers: {
            Accept: "application/vnd.github.v3.raw",
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
        }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const imageBlob = await response.blob();
    return URL.createObjectURL(imageBlob);
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
};

export default fetchImage;