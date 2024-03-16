import React, { useEffect } from 'react';
import Aos from 'aos';

export default function Animation({ children }) {
  useEffect(() => {
    Aos.init({
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <div data-aos="zoom-in">
      {children}
    </div>
  );
}
