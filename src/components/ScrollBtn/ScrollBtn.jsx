import React, {useState, useEffect} from 'react';
import '../ScrollBtn/ScrollBtn.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ScrollButton = () => {

  const [ShowBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", onPageScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

const phoneNumber = '+12892643058'; 
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}`;
      window.location.href = whatsappURL;
  };



  
//   const handleClick = () => {
      
//   };

  return (
    <div  className={`scroll-button ${ShowBtn ? "show-scroll" : ""}`} type="button" onClick={handleButtonClick}>
    <FontAwesomeIcon icon={faSquareWhatsapp} size="lg" />
    </div>

  );
};

export default ScrollButton;

