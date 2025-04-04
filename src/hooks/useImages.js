import { useEffect, useState } from "react";

const repoLink = "https://api.github.com/repos/ThatDoc/portfolio-images/contents/images.json?ref=main";
const repoToken = process.env.REACT_APP_GITHUB_TOKEN;

const useImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          repoLink,
          {
            headers: {
              Authorization: `token ${repoToken}`,
              Accept: "application/vnd.github.v3.raw",
            },
          }
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        setImages(await response.json());
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return images;
};

export default useImages;