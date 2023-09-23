import { useEffect, useState, createContext } from 'react';

import Intake from '../intake/Intake'
import Goal from '../goal/Goal';
import UseGetRequest from '../../../hooks/UseGetRequest';

export const GoalContext = createContext(null);

function Tracker() {
  const { data: goalData } = UseGetRequest("http://127.0.0.1:8000/api/goals?userId=1");
  const [goal, setGoal] = useState(null);
  
  useEffect(() => {
    setGoal(goalData);
}, [goalData])

  return (
    <>
         <GoalContext.Provider value={{ goal, setGoal }}>
            <Goal> </Goal>
            <Intake></Intake>
          </GoalContext.Provider>
    </>
  );
}

export default Tracker;



