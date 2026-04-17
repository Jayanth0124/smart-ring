export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`
        inline-block font-sans text-xs font-semibold tracking-widest uppercase
        bg-zinc-100 text-teal-700 px-4 py-1.5 rounded-full
        ${className}
      `}
    >
      {children}
    </span>
  );
}