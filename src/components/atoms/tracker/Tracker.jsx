import ButtonBar from '../../imagen-button-bar/ButtonBar'
import useFetch from "../../../hooks/useFetch";
function Tracker() {
  const { data: goal } = useFetch("http://127.0.0.1:8000/api/goals?userId=1");

  if (!goal) {
    return <div>Loading...</div>;
  }

  return (
    <>
            {/* <h2 className='flex flex-col items-center my-4'> Tracker</h2>
            <div className='flex flex-col items-center my-10'> 
                <ul>
                    <li>
                       ID USER { goal.id_user }
                    </li>
                </ul>
            </div> */}

            <ButtonBar goal={goal.goal || 0}></ButtonBar>
        </>
  );
}

export default Tracker;



