import React, { useCallback, useState } from "react";
import Memo from "./Memo";

const HooksLearn = () => {
  const [counter, setCounter] = useState(0);

  const handlerCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* <span>{counter}</span> */}
      <Memo counter={counter} />
      <button
        onClick={handlerCounter}
        className="border rounded-md shadow font-bold px-3 py-1"
      >
        Counter
      </button>
    </div>
  );
};

export default HooksLearn;
