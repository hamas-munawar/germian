const Button = ({ children: text }) => {
  return (
    <button className="group relative overflow-hidden cursor-pointer bg-white px-4 py-1 text-primary transition-all duration-300 hover:bg-primary hover:text-white font-pp-supply-mono text-xs uppercase">
      <span className="relative block transition-transform duration-300 group-hover:-translate-y-[150%]">
        {text}
      </span>
      <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </button>
  );
};

export default Button;
