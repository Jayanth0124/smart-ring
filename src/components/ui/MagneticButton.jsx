import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', variant = 'primary', ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "relative px-8 py-4 font-sans text-sm tracking-[0.1em] uppercase font-medium overflow-hidden transition-colors duration-300 rounded-full";
  const styles = {
    primary: "bg-espresso-900 text-white hover:bg-espresso-800",
    glass: "bg-white/10 backdrop-blur-md text-espresso-900 border border-white/20 hover:bg-white/20"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyle} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}