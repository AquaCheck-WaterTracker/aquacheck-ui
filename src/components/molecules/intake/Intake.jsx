import ImageButton from "../../atoms/Button/ImageButton";
import glass from "../../../assets/glass-200.svg";
import bottlexs from "../../../assets/bottle400.svg";
import botellalg from "../../../assets/bottle700.svg";
import {useState, useContext, useEffect } from "react";
import { GoalContext } from '../tracker/Tracker';
import { UserContext } from '../../../App';
import UseGetRequest from '../../../hooks/UseGetRequest';


const Intake = () => {

    const { goal, setGoal } = useContext(GoalContext);
    const { user, setUser } = useContext(UserContext);
    const [waterQuantity, setWaterQuantity] = useState(0);

    const { data: intakeData } = UseGetRequest("http://127.0.0.1:8000/api/intake?userId=1");
    const [intakes, setIntakes] = useState([]);
    
    useEffect(() => {
      setIntakes(intakeData);
  }, [intakeData]);
  

  const intakeResult = (intakes || []).map(intake => {
    console.log(intake.intake);
    return intake.intake; 
  });
  
  const sumaIntakes = intakeResult.reduce((total, intake) => total + intake, 0);
  console.log("Suma de los intakes:", sumaIntakes);

    const intakeGoal = (goal && goal.goal || 0);

    const addWater = (quantity) => {     
      setWaterQuantity(quantity + waterQuantity);
    };

   
    const saveWater = async (newIntake) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_user: user && user.id, intake: newIntake })
      };

      try {
          const response = await fetch("http://127.0.0.1:8000/api/intake", requestOptions);
          
          if(!response.ok) {
            throw new Error("POST response was not OK");
          }

          const json = await response.json();
          saveWater(json);
          setWaterQuantity(0);

        } catch (error) {
            console.error("Error fetching data:", error)
        }

        // MOSTRAR TODOS LOS INTAKES
  }

    return (
      <>
      <div className='flex flex-col items-center'>
        <p> You have been drinking {sumaIntakes} </p>
 
      { ( intakeGoal > 0 && waterQuantity >= intakeGoal) ? ( <p className="my-10 text-base text-sky-500 text-lg "> Nice job! </p>) : <p className="my-4 text-base text-amber-500 text-lg"> You have not hit your goal yet </p> }
      <p className="my-10 text-3xl text-sky-500"> {waterQuantity} ml</p>
      </div>
      
      <div className='flex flex-row justify-center my-20 '>
        <div className='flex flex-col items-center'>
          <ImageButton image={glass} onClick = { event => addWater(200) } />
          <p className="my-2 text-base text-cyan-700">200ml</p>
        </div>
        <div className='flex flex-col items-center'>
        <ImageButton image={bottlexs} onClick = { event => addWater(300) } />
        <p className="my-2 text-base text-cyan-700">300ml</p>
        </div>
        <div className='flex flex-col items-center'>
        <ImageButton image={botellalg} onClick = { event => addWater(1000) } />
        <p className="my-2 text-base text-cyan-700"> 1000ml</p>
        </div>
      </div>
      {/* Submit button para mandar a la API todo lo bebido */}
       <div className='flex flex-col items-center'>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded mt-2 mb-20" onClick={ event => saveWater(waterQuantity)}>
          Save water
        </button>
        </div>
      </>
    );
  };

  export default Intake;
 
  
  
  
  
  