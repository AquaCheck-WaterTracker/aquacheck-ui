import Intake from '../intake/Intake'
import useFetch from "../../../hooks/useFetch";
import Goal from '../goal/Goal';

function Tracker() {
  const { data: goal } = useFetch("http://127.0.0.1:8000/api/goals?userId=1");

 

  if (!goal) {
    return <div>Loading...</div>;
  }

  return (
    <>

            <Goal goal={goal.goal || 0}> </Goal>
            <Intake goal={goal.goal || 0}></Intake>



        </>
  );
}

export default Tracker;



