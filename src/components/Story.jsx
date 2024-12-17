import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import RoundedCorners from './RoundedCorners';
import Button from './Button';

const Story = () => {

    const frameRef=useRef(null);

    const handleMouseLeave=()=>{
        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0, // Adjust for correct orientation
            rotateY: 0,
            ease: 'power1.inOut',
          });
    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e; // Destructure the mouse coordinates
        const element = frameRef.current;
    
        if (!element) return;
    
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left; // Calculate mouse position relative to the element
        const y = clientY - rect.top;
    
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = ((y - centerY) / centerY) * -10; // Adjust rotation strength
        const rotateY = ((x - centerX) / centerX) * 10;
    
        gsap.to(element, {
          duration: 0.3,
          rotateX: rotateX, // Adjust for correct orientation
          rotateY: rotateY,
          transformPerspective: 500, // Add depth for 3D effect
          ease: 'power1.inOut',
        });
      };
  return (
    <div id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>The multiversal ip world</p>
            <div className='relative size-full'>
                <AnimatedTitle
                    title={"The st<b>o</b>ry of <br/>a hidden real<b>m</b>"}
                    setionId='#story'
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                />
                <div className='story-img-container '>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img ref={frameRef} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} src="/img/entrance.webp" alt="entrance" className='object-contain' />
                        </div>
                    </div>
                    <RoundedCorners />
                </div>
            </div>
            <div className='-mt-80 flex md:-mt-64 md:me-44 md:justify-end justify-center w-full '>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-8 max-w-sm text-center font-circular-web text-violet-50 md:text-start'>Where realms converge, lies Zentry and the boudless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
                    <Button id={"realm-button"} title={"discover prologue"} containerClass={"mt-5 bg-white"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story