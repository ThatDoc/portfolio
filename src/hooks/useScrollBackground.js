import { useEffect } from "react";

const useScrollBackground = (speed = .5) => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const background = document.querySelector('.Page-content-container');
          if (background) {
            background.style.backgroundPosition = `center ${scrollY * speed}px`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);
}

export default useScrollBackground;
