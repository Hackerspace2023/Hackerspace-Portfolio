const Card = ({ className = "", children, ...props }) => {
  return (
    <>
      <div className={`Card ${className}`} {...props}>
        {children}
      </div>
    </>
  );
};

export default Card;

// I have added three props in the componets
// 1. className is used when we add classes outside the componet
// 2. children is used if any sub-elements present then it will add it to it's div
// 3. {...props} is used if any one added any other property which is not inside the componet then it will handel it and add the property to the component
