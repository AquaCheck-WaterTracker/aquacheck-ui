import { useState } from 'react';

export default function UpdateGoal() {
  const [goal, setGoal] = useState(0);
  const newGoal = Number(goal);

  const submitGoal = () => {
    

    console.log(newGoal)
}
  return (
    <>
      <label htmlFor="goal" className="block mb-2 font-bold text-gray-900 dark:text-cyan-800 my-6 text-2xl">
         Set your new goal
        <input className="bg-white border border-grey-400 text-gray-600 text-sm rounded-lg focus:ring-gray-300 focus:border-blue-500 block dark:bg-grey-100 dark:border-blue-600 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
          value={goal}
          onChange={e => setGoal(e.target.value)}
          type="number"
        />
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded my-6" onClick={() => submitGoal(newGoal)}>
          Update
        </button>
      </label>
    </>
  );
}
