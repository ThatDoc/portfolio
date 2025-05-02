import { useEffect } from "react";

const useIntersectionObserver = (selector, animation, shouldRun = true, options = { threshold: 0.1 }) => {
    useEffect(() => {
        if (!shouldRun) return;

        const items = document.querySelectorAll(selector);
        items.forEach(item => item.classList.add("hidden"));
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate')) {
              entry.target.classList.remove("hidden");
              entry.target.classList.add(animation);
              obs.unobserve(entry.target);
            }
          });
        }, options);
      
        items.forEach(item => observer.observe(item));
      
        return () => observer.disconnect();
    }, [selector, animation, shouldRun, options]);
};

export default useIntersectionObserver;
