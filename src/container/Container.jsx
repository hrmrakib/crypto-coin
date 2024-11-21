const Container = ({ children, className }) => {
  return (
    <div className={`w-[94%] xl:w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
