import { ArrowUp24Regular } from "@fluentui/react-icons";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div>
      <Button
        isIconOnly
        color="primary"
        onPress={scrollToTop}
        className={`fixed bottom-20 right-20 transition-opacity duration-500 ease-in-out opacity-0 ${showButton ? 'md:opacity-100' : 'md:opacity-0'}`}
      >
        <ArrowUp24Regular />
      </Button>
    </div>
  );
};

export default ScrollTop;
