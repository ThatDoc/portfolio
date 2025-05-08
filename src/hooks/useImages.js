import { useEffect, useState } from "react";

const repoLink = "https://api.github.com/repos/ThatDoc/portfolio-images/contents/images.json?ref=main";

const useImages = (category) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          repoLink,
          {
            headers: {
              Accept: "application/vnd.github.v3.raw",
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            },
          }
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const safeCategory = category?.trim().toLowerCase();
        const selectedImages = data[safeCategory] || [];

        setImages(selectedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [category]);

  return images;
};

export default useImages;