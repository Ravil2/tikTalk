interface IUbutton {
  children: React.ReactNode;
  className?: string;
}

const UButton = ({ children, className = "" }: IUbutton) => {
  return (
    <div>
      <button className={`${className}`}>{children}</button>
    </div>
  );
};

export default UButton;
