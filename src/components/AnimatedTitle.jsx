import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.fromTo(
        '.animated-word',
        {
          opacity: 0,
          transform: 'translate3d(0,20px,0) rotateY(-30deg) rotateX(10deg)',
        },
        {
          opacity: 1,
          transform: 'translate3d(0,0,0) rotateY(0) rotateX(0)',
          ease: 'power2.inOut',
          stagger: 0.02,
          duration: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split('<br/>').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
