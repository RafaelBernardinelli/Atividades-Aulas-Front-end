import { useState } from "react";

const ShowNumbers = () => {
  const [numbers, setNumbers] = useState([2, 5, 1, 8, 6, 40, 9, 2, 19, 2]);

  const handleNumbers = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    setNumbers(sortedNumbers);
  };

  return (
    <div>
      <button onClick={handleNumbers}>Ordenar</button>
      <h1>{numbers.join(",")}</h1>
    </div>
  );
};

export default ShowNumbers;
