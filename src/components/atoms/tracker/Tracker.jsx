import { useEffect, useState } from 'react';
import ButtonBar from '../../imagen-button-bar/ButtonBar'


function Tracker() {
    const [goal, setGoal] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/goals?userId=1')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setGoal(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
    <>
        <>
            <h2 className='flex flex-col items-center my-4'> Tracker</h2>
            <div className='flex flex-col items-center my-10'> 
                <ul>
                    <li>
                       ID USER { goal.id_user }
                    </li>
                </ul>
            </div>

            <ButtonBar goal={goal.goal || 0}></ButtonBar>
        </>
        
    </>
    );
  }
  
  export default Tracker;
  