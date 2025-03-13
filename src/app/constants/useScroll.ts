import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useScrollToPricing = () => {
  const router = useRouter();

  const scrollToPricing = useCallback(() => {
    const element = document.getElementById("planes");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    } else {
      // Usar window.location.href en lugar de router.push
      window.location.href = '/';
      // Esperar un momento para que la página se cargue antes de hacer scroll
      setTimeout(() => {
        const newElement = document.getElementById("planes");
        if (newElement) {
          window.scrollTo({
            top: newElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }, 500); // Ajusta el tiempo según sea necesario
    }
  }, [router]);

  return { scrollToPricing };
};

export default useScrollToPricing;

