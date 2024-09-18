// AnimatedSection.tsx
import React, {useEffect, useRef} from "react";
import {motion, useAnimation, Variants, useInView} from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
}

const fadeInUp: Variants = {
  hidden: {opacity: 0, y: 60},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {once: false});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className="py-16 md:py-32 lg:py-48"
    >
      {children}
    </motion.section>
  );
};
