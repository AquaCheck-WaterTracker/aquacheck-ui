import UpdateGoal from '../../atoms/form/UpdateGoal';
import { useState } from 'react';
import PropTypes from 'prop-types';


function Goal({goal}) {
    const [toggleEdit, setToggleEdit] = useState(false);

    return (
        <>
    
          <div className="flex flex-col items-center">
                { toggleEdit ? 
                (
                  <>
                  <UpdateGoal></UpdateGoal> 
                  <span onClick = { event => setToggleEdit(!toggleEdit) }> Back </span>
                </>
                )
              : 
              (
                <>
                <h2 className="my-10 text-3xl text-cyan-800"> Your goal is {goal} ml</h2>
                <span onClick = { event => setToggleEdit(!toggleEdit) }> Edit </span>
                </>
              ) }
            </div>

                
        </>
    );
}

Goal.propTypes = {
    goal: PropTypes.number.isRequired,
  };

export default Goal;