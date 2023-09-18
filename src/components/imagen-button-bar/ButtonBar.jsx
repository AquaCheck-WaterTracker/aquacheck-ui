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
      <p className="my-10">Tu goal es: {goal} ml</p>
      </div>
      <div className='flex flex-row justify-center my-20'>
        <ImageButton image={glass} onClick = { event => addWater(200) } />
        <ImageButton image={bottlexs} onClick = { event => addWater(300) } />
        <ImageButton image={botellalg} onClick = { event => addWater(1000) } />
      </div>

      <div className='flex flex-col items-center'>
      <p> {waterQuantity}</p>
      { waterQuantity >= goal ? ( <p> Enhorabuena </p>) : <p> Aun no has llegado a tu meta </p> }
      </div>
      
      {/* Submit button para mandar a la API todo lo bebido */}
       <div className='flex flex-col items-center'>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded" onClick={ event => saveWater(waterQuantity)}>
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
 
  
  
  
  
  