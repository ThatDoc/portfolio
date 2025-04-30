import { useEffect } from "react";

const useIntersectionObserver = (selector, animation, options = { threshold: 0.1 }) => {
    useEffect(() => {
        const items = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
              entry.target.classList.add(animation);
              obs.unobserve(entry.target);
            }
          });
        }, options);
      
        items.forEach(item => observer.observe(item));
      
        return () => observer.disconnect();
    }, [selector, animation, options]);
};

export default useIntersectionObserver;
