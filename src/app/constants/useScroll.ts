import { useRouter } from 'next/navigation';
import React from 'react';

const useScrollToPricing = () => {
  const router = useRouter();

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const element = document.getElementById("planes");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    } else {
      router.push('/').then(() => {
        const newElement = document.getElementById("planes");
        if (newElement) {
          window.scrollTo({
            top: newElement.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }
  };

  return { scrollToPricing };
};

export default useScrollToPricing;



