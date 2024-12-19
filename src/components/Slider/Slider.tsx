"use client"

import Image from "next/image";

import styles from './ImageSlider.module.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 2,
    slidesToScroll: 2, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    appendDots: (dots: React.ReactNode): JSX.Element => (
      <div>
        <ul className={styles["slick-dots"]}>{dots}</ul>
      </div>
    )
  
  };
  
  
    return (
      <Slider {...settings}  className="mt-10  " >
        <div >
          <Image src="/images/one.jpg" alt="Slider 1" width={500} height={490} className="w-[716px] h-[690px] rounded-lg ml-8 "/>
        </div>
        <div>
          <Image src="/images/two.jpg" alt="Slider 2" width={500} height={480} className="w-[716px] h-[690px] rounded-lg ml-5 "/>
        </div>
        <div>
          <Image src="/images/three.jpg" alt="Slider 3" width={500} height={490} className="w-[716px] h-[690px] rounded-lg ml-8 "/>
        </div>
         <div>
          <Image src="/images/four.jpg" alt="Slider 4" width={500} height={480} className="w-[716px] h-[690px] rounded-lg ml-5"/>
        </div>
         <div>
          <Image src="/images/five.jpg" alt="Slider 5" width={500} height={490} className="w-[716px] h-[690px] rounded-lg ml-8 "/>
        </div>
         <div>
          <Image src="/images/six.jpg" alt="Slider 6" width={500} height={490} className="w-[716px] h-[690px] rounded-lg ml-5"/>
        </div>
         <div>
          <Image src="/images/seven.jpg" alt="Slider 7" width={500} height={490} className="w-[716px] h-[690px] rounded-lg ml-8 "/>
        </div>
         <div>
          <Image src="/images/eight.jpg" alt="Slider 8" width={500} height={480} className="w-[716px] h-[690px] rounded-lg ml-5"/>
        </div>
        
       
      </Slider>
    ); 
  }
  
  export default ImageSlider;
  