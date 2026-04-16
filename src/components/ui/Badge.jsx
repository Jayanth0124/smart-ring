export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`
        inline-block font-sans text-xs font-medium tracking-widest uppercase
        bg-espresso-200 text-espresso-800 px-3 py-1 rounded-full
        ${className}
      `}
    >
      {children}
    </span>
  );
}
