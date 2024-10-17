import React from "react";
import { Navbar, MobileNav } from "./";

const BaseLayout = () => {
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isMobile;
  };
  
  const isMobile = useIsMobile
  return (
    <main>
      <Navbar />
      {isMobile && <section className="md:hidden">
        <MobileNav />
      </section>}
    </main>
  );
};

export default BaseLayout;
