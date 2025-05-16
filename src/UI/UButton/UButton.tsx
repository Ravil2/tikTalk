interface IUbutton {
  children: React.ReactNode;
  className?: string;
}

const UButton = ({ children, className = "" }: IUbutton) => {
  return (
    <button
      className={`text-black py-2 px-4 rounded-[4px] 
      cursor-pointer bg-[var(--primary-color)] font-bold text-[14px] 
      leading-3.5 h-fit whitespace-nowrap ${className}`}
    >
      {children}
    </button>
  );
};

export default UButton;
