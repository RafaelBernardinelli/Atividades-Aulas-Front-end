import { useState } from "react";

const ShowName = () => {
  const [hasName, setHasName] = useState(undefined);

  const handleClick = () => {
    if (!hasName) {
      setHasName("Rafael Bernardinelli");
    } else {
      setHasName(undefined);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Nome: {hasName}</button>
    </div>
  );
};

export default ShowName;
