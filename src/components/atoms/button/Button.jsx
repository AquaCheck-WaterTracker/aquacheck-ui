import React from 'react';

function Button() {
    const saveWater = () => {

        console.log("DRANK")
    }

  return (
    <button className="bg-blue-400 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded" onClick={saveWater}>
      Save water
    </button>
  );
}

export default Button;
