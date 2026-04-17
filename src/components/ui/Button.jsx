import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-sm',
  secondary: 'bg-transparent text-zinc-900 border-2 border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50',
  ghost: 'bg-transparent text-zinc-600 border border-transparent hover:bg-zinc-100',
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
        tracking-wide rounded-full transition-colors duration-200 cursor-pointer
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}