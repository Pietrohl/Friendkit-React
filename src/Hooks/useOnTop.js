import{useState, useEffect} from 'react';

export const useOnTop = () => {
    
    const [Scrolltop, setScrollTop] = useState(window.scrollTop);
  
    useEffect(() => {
      const handleScroll = () => setScrollTop(window.scrollTop);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("resize", handleScroll);
    }, []);
  
    return { Scrolltop };
  }

