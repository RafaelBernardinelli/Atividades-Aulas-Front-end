import { useState } from "react";

const Input = () => {
  const [valor, setValor] = useState("");
  const [showNewValue, setShowNewValue] = useState("");

  const showValue = () => {
    setShowNewValue(valor);
  };

  return (
    <div>
      <label>Digite aqui: </label>
      <input value={valor} onChange={(e) => setValor(e.target.value)} />

      <button onClick={showValue}>Mostrar</button>

      <h4>{showNewValue}</h4>
    </div>
  );
};

export default Input;
