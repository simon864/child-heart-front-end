import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  breakpoints?: {
    minWidth: number;
    itemsToShow: number;
  }[];
  className?: string;
  classes?: {
    container?: string;
    track?: string;
    items?: string;
    item?: string;
    navButton?: string;
    prevButton?: string;
    nextButton?: string;
  };
}

const defaultBreakpoints = [
  { minWidth: 0, itemsToShow: 1 },
  { minWidth: 650, itemsToShow: 2 },
  { minWidth: 900, itemsToShow: 3 },
];

function Carousel<T>({
  data,
  renderItem,
  breakpoints = defaultBreakpoints,
  className = '',
  classes = {},
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [containerWidth, setContainerWidth] = useState('100%');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const matchedBreakpoint = [...breakpoints]
        .sort((a, b) => b.minWidth - a.minWidth)
        .find((bp) => width >= bp.minWidth);
      
      const newItemsToShow = matchedBreakpoint?.itemsToShow || 1;
      setItemsToShow(newItemsToShow);
      
      const itemWidth = 260;
      const gap = 10;
      const newContainerWidth = (itemWidth * newItemsToShow) + (gap * (newItemsToShow - 1));
      setContainerWidth(`${newContainerWidth}px`);
      
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoints]);

  const maxIndex = Math.max(0, data.length - itemsToShow);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const goNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }
  };

  return (
    <div 
      className={`${styles.carouselContainer} ${className} ${classes.container || ''}`}
      style={{ width: containerWidth }}
    >
      <button 
        onClick={goPrev}
        disabled={!canGoPrev}
        className={`${styles.navButton} ${classes.navButton || ''} ${classes.prevButton || ''}`}
        aria-label="Previous"
      >
        &lt;
      </button>

      <div className={`${styles.carouselTrack} ${classes.track || ''}`}>
        <div 
          className={`${styles.carouselItems} ${classes.items || ''}`}
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {data.map((item, index) => (
            <div 
              key={index}
              className={`${styles.carouselItem} ${classes.item || ''}`}
              style={{ width: `${100 / itemsToShow}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={goNext}
        disabled={!canGoNext}
        className={`${styles.navButton} ${classes.navButton || ''} ${classes.nextButton || ''}`}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;