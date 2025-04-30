import { useEffect, useState } from "react";

const useDotLoading = (interval = 300) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const steps = ['', '.', '..', '...'];
    let i = 0;

    const id = setInterval(() => {
      i = (i + 1) % steps.length;
      setDots(steps[i]);
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return dots;
};

export default useDotLoading;