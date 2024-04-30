// import "./img.css";
import name from "../image/parelall-scroll/10(1).jpg";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Img10 = () => {
  return (
    <div className="bg-neutral-800">
   <HorizontalScrollCarousel />
    </div>
  );
};

export default Img10;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ y: x }} className="flex">
          <img src={name} alt="" width={700} />
        </motion.div>
      </div>
    </section>
  );
};
