import UpdateGoal from '../../atoms/Form/updateGoal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CreateGoal from '../../atoms/form/CreateGoal';
import { UserContext } from '../../../App'
import { useContext } from 'react';
import { GoalContext } from '../tracker/Tracker';


function Goal() {

    const { user, setUser } = useContext(UserContext);
    const { goal, setGoal } = useContext(GoalContext);
    const [toggleEdit, setToggleEdit] = useState(false);

    const handleClick = (event) => {
        setToggleEdit(!toggleEdit)
    }

    const handleDelete = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/goals/${goal.id}?userId=${user.id}`, requestOptions);
            
            if(!response.ok) {
              throw new Error("DELETE response was not OK");
            }
        
            setGoal(null);

          } catch (error) {
              console.error("Error fetching data:", error)
          }
    }

    const handleSubmit = async (newGoal) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_user: user && user.id, goal: newGoal })
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/goals", requestOptions);
            
            if(!response.ok) {
              throw new Error("POST response was not OK");
            }

            const json = await response.json();
            setGoal(json);

          } catch (error) {
              console.error("Error fetching data:", error)
          }
    }

    const handleUpdate = async (newGoal) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_user: user && user.id, goal: newGoal })
        };

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/goals/${goal.id}`, requestOptions);
            
            if(!response.ok) {
              throw new Error("PUT response was not OK");
            }

            const json = await response.json();
            
            setToggleEdit(false);

            setGoal(json);

          } catch (error) {
              console.error("Error fetching data:", error)
          }
    }

    return (
        <>
            {  goal ? 
                ( 
                    toggleEdit ? 
                        (
                            <UpdateGoal onClick= { handleUpdate }></UpdateGoal> 
                        )
                    : 
                        (
                            <div className="flex flex-row justify-center">
                                <h2 className="my-10 text-3xl text-cyan-800"> Your goal is {goal.goal} ml</h2>
        
                                <span className="flex flex-row items-center mr-4 ml-4" onClick = { handleClick }>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </span>
                                <span className="flex flex-row items-center mr-4 ml-4" onClick = { handleDelete }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />   
                                    </svg>
                                </span>

                            </div>
                        ) 
                )
            : 
            
                    <CreateGoal onClick={handleSubmit}></CreateGoal>
            }
        </>
    );
}

Goal.propTypes = {
    goal: PropTypes.object
  };

export default Goal;