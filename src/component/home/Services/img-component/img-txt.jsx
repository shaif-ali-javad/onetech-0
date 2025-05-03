import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./img.scss";
import 'animate.css/animate.min.css';
import securityImg from '../image/6538623.jpg';
import cloudImg from '../image/877.jpg';
import cyberImg from '../image/6538623.jpg';
import sfsf from '../../Services/image/parelall-scroll/0(1).jpg';

// const slides = [
//   {
//     title: "Network Security",
//     subtitle: "Advanced protection for your digital assets with enterprise-grade security solutions",
//     image: securityImg,
//     color: "linear-gradient(135deg, #2563eb, #1e40af)"
//   },
//   {
//     title: "Cloud Protection",
//     subtitle: "Robust security for your cloud infrastructure and services",
//     image: cloudImg,
//     color: "linear-gradient(135deg, #3b82f6, #1e40af)"
//   },
//   {
//     title: "Cyber Defense",
//     subtitle: "Proactive defense mechanisms against cyber threats",
//     image: cyberImg,
//     color: "linear-gradient(135deg, #60a5fa, #3b82f6)"
//   }
// ];

// const ImgTxt = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderRef = useRef(null);
//   const headlineRef = useRef(null);
//   const subheadingRef = useRef(null);

//   useEffect(() => {
//     // Text animations
//     gsap.from([headlineRef.current, subheadingRef.current], {
//       y: 30,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3,
//       ease: "power3.out"
//     });
//   }, []);

//   const handleSlideChange = (direction) => {
//     const next = direction === 'next' 
//       ? (currentSlide + 1) % slides.length
//       : (currentSlide - 1 + slides.length) % slides.length;

//     gsap.timeline()
//       .to(sliderRef.current, {
//         opacity: 0,
//         x: direction === 'next' ? -100 : 100,
//         duration: 0.3,
//         onComplete: () => setCurrentSlide(next)
//       })
//       .set(sliderRef.current, { x: direction === 'next' ? 100 : -100 })
//       .to(sliderRef.current, {
//         opacity: 1,
//         x: 0,
//         duration: 0.3
//       });
//   };

//   return (
//     <div className="img-main-over">
//       <div className="content-wrapper">
//         <div className="slider-outer">
//           <div ref={sliderRef} className="slider-container">
//             <div className="slider-flex">
//               <div className="slider-content">
//                 <h1 className="visible-headline" ref={headlineRef}>
//                   {slides[currentSlide].title}
//                 </h1>
//                 <p className="visible-subheading" ref={subheadingRef}>
//                   {slides[currentSlide].subtitle}
//                 </p>
//               </div>
//               <div 
//                 className="icon-container" 
//                 style={{ background: slides[currentSlide].color }}
//               >
//                 <img 
//                   src={slides[currentSlide].image} 
//                   alt={slides[currentSlide].title}
//                   className="slide-image"
//                 />
//               </div>
//             </div>
//           </div>
          
//           <button className="nav-button prev" onClick={() => handleSlideChange('prev')}>
//             ←
//           </button>
//           <button className="nav-button next" onClick={() => handleSlideChange('next')}>
//             →
//           </button>
          
//           <div className="slide-indicators">
//             {slides.map((_, index) => (
//               <div 
//                 key={index}
//                 className={`indicator ${currentSlide === index ? 'active' : ''}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImgTxt;






const ImgTxt = () => {

  return (    

<div class="untitled">
	<div class="untitled__slides">
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Office Automation</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				
				<span>Software Solutions</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>AV Solutions</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Structured Cabling</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>ELV Systems</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				
				<span>Backup and Disaster Recovery Management</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Home Automation</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Cloud Services</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Maintenance & Support</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				
				<span>AI Based Solutions</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Data Centre Solutions</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				<span>Microsoft Azure / Office 365</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
		<div class="untitled__slide">
			<div class="untitled__slideBg"></div>
			<div class="untitled__slideContent">
				
				<span>Web development</span> 
				<a class="button" href="#" target="/black">service</a>
			</div>
		</div>
	</div>
	<div class="untitled__shutters"></div>
</div>
  );
};

export default ImgTxt;
