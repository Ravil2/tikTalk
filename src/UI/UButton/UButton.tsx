interface IUbutton {
  children: React.ReactNode;
  className?: string;
}

const UButton = ({ children, className = "" }: IUbutton) => {
  return (
    <div>
      <button
        className={`text-black py-[10px] px-[20px] rounded-[4px] 
        cursor-pointer bg-[var(--primary-color)] font-bold text-[14px] leading-3.5 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default UButton;
