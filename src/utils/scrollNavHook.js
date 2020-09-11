import { useState, useEffect, useContext } from 'react';
import { hasWindow } from './hasWindow';
import { GlobalStateContext } from '../context/global-context-provider';

const ScrollNavHook = () => {
  const [hide, setHide] = useState(false);
  const [curScroll, setCurScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [direction, setDirection] = useState(0);
  const [prevDirection, setPrevDirection] = useState(0);

  // Check if the mobile menu is open via global state
  const { isMobileMenuOpen } = useContext(GlobalStateContext);

  const toggleHeader = (direction, curScroll) => {
    // height of your header in px
    if (direction === 2 && curScroll > 100) {
      setHide(true);
      setPrevDirection(direction);
    } else if (direction === 1) {
      setHide(false);
      setPrevDirection(direction);
    }
  };

  const checkScroll = (e) => {
    setCurScroll(window.scrollY);
  };

  useEffect(() => {
    // Scroll direction: 0 - initial, 1 - up, 2 - down
    setPrevScroll(curScroll);
    if (curScroll > prevScroll + 15) {
      setDirection(2);
    } else if (curScroll < prevScroll - 15) {
      setDirection(1);
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
  }, [curScroll]);

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll', checkScroll);
      return () => {
        window.removeEventListener('scroll', checkScroll);
      };
    }
  }, []);

  // Stop hiding the navbar if the mobile menu is open
  return isMobileMenuOpen ? false : hide;
};

export default ScrollNavHook;
