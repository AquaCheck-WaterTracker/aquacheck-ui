import ImageButton from "../atoms/Button/ImageButton";
import PropTypes from 'prop-types';
import glass from "./../../assets/glass-200.svg";
import bottlexs from "./../../assets/bottle400.svg";
import botellalg from "./../../assets/bottle700.svg";
import {useState} from "react";


const ButtonBar = ({goal}) => {
    const [waterQuantity, setWaterQuantity] = useState(0);

    const addWater = (quantity) => {     
      setWaterQuantity(quantity + waterQuantity);
    };

    const saveWater = (waterQuantity) => {
       console.log(waterQuantity)
    };

    return (

      <>
      <div className='flex flex-col items-center'>
        <h2 className="my-10 text-3xl text-cyan-800"> Goal: {goal} ml</h2>
      </div>
      <div className='flex flex-col items-center'>
        <p className="my-10 text-3xl text-sky-500"> {waterQuantity} ml</p>
      { waterQuantity >= goal ? ( <p className="my-10 text-base text-sky-500 text-lg "> Nice job! </p>) : <p className="my-4 text-base text-amber-500 text-lg"> You have not hit your goal yet </p> }
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
  
  ButtonBar.propTypes = {
    goal: PropTypes.number.isRequired,
  };
  export default ButtonBar;
 
  
  
  
  
  