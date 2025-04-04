const repoToken = process.env.REACT_APP_GITHUB_TOKEN;


const fetchImage = async (imagePath) => {    
    try {
    const response = await fetch(
        `https://api.github.com/repos/ThatDoc/portfolio-images/contents/images/${imagePath}?ref=main`,
        {
        headers: {
            Authorization: `token ${repoToken}`,
            Accept: "application/vnd.github.v3.raw",
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