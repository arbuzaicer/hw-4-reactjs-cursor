import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all';

import imagesData from '../../data/imagesData';

import './Slider.scss';

const Slider = () => {
  const images = imagesData;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    let nextInd = 0;
    if (currentImage + 1 < images.length) {
      nextInd = currentImage + 1;
    }
    setCurrentImage(nextInd);
  };

  const prevImage = () => {
    let prevInd = images.length - 1;
    if (currentImage > 0) {
      prevInd = currentImage - 1;
    }
    setCurrentImage(prevInd);
  };

  return (
    <div className="slider">
      <button
        onClick={prevImage}
        className="slider__btn arrow-prev"
        data-dir="prev"
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="slider__content">
        <AnimatePresence>
          <motion.img
            key={images[currentImage].key}
            src={images[currentImage].data}
            alt={images[currentImage].text}
            initial={{ x: -150, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -150, y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <button
        onClick={nextImage}
        className="slider__btn arrow-next"
        data-dir="next"
      >
        <MdKeyboardArrowRight />
      </button>
      <p className="slider__description">{images[currentImage].text}</p>
    </div>
  );
};

export default Slider;
