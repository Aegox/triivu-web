import { useRouter } from 'next/navigation';
import { useCallback } from 'react'; // Importa useCallback

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
  }, [router]); // router como dependencia de useCallback

  return { scrollToPricing };
};

export default useScrollToPricing;
