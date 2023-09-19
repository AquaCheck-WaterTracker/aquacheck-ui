import { useState } from 'react';

export default function UpdateGoal() {
  const [goal, setGoal] = useState(0);
  const newGoal = Number(goal);

  const submitGoal = () => {

    console.log(newGoal)
}
  return (
    <>
      <label>
        Intake:
        <input
          value={goal}
          onChange={e => setGoal(e.target.value)}
          type="number"
        />
        <button onClick={() => submitGoal(newGoal)}>
          Add 10 years
        </button>
      </label>
    </>
  );
}
