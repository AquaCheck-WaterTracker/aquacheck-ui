import { useState } from 'react';
import PropTypes from 'prop-types';

function CreateGoal({onClick}) {
 
  const [goal, setGoal] = useState(0);
  const newGoal = Number(goal);

  return (
    
     <div className="flex flex-col items-center">
        <label htmlFor="goal" className="block mb-2 font-bold text-gray-900 dark:text-cyan-800 my-6 text-2xl">
          Create your goal
          <input className="bg-white border border-grey-400 text-gray-600 text-sm rounded-lg focus:ring-gray-300 focus:border-blue-500 block dark:bg-grey-100 dark:border-blue-600 dark:placeholder-gray-400 dark:text-grey dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
            value={goal}
            onChange={e => setGoal(e.target.value)}
            type="number"
          />
        </label>
        <div className="flex flex-row">
              <button className="bg-blue-400 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded my-6" onClick={ event => onClick(newGoal, 'POST') }>
                Create
              </button>
            </div>
       </div>
  
  );
}

CreateGoal.propTypes = {
    onClick: PropTypes.func.isRequired, 
  };
  
export default CreateGoal;

