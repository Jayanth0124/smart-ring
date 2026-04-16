import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-espresso-800 text-espresso-50 border border-espresso-800 hover:bg-espresso-700',
  secondary: 'bg-transparent text-espresso-800 border border-espresso-800 hover:bg-espresso-100',
  ghost: 'bg-transparent text-espresso-700 border border-transparent hover:border-espresso-300 hover:bg-espresso-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`
        inline-flex items-center justify-center gap-2 font-sans font-medium
        tracking-wide rounded-none transition-colors duration-200 cursor-pointer
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
