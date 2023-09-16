import ImageButton from "../atoms/Button/ImageButton";
import glass from "./../../assets/glass-200.svg";
import bottlexs from "./../../assets/bottle400.svg";
import botellalg from "./../../assets/bottle700.svg";
import {useState} from "react";


const ButtonBar = () => {
    const [waterQuantity, setWaterQuantity] = useState(0);

    const goal = 2000;

    const addWater = (quantity) => {     
      setWaterQuantity(quantity + waterQuantity);

      console.log(quantity);

    };
  
    return (

      <>
      <div className='flex flex-col items-center'>
      <p> {waterQuantity}</p>
      { waterQuantity >= goal ? ( <p> Enhorabuena </p>) : <p> Aun no has llegado a tu meta </p> }
      </div>

      <div className='flex flex-row justify-center my-20'>
        <ImageButton image={glass} onClick = { event => addWater(200) } />
        <ImageButton image={bottlexs} onClick = { event => addWater(300) } />
        <ImageButton image={botellalg} onClick = { event => addWater(1000) } />
        

       

         {/* Submit form button para mandar a la API todo lo bebido */}
        
      </div>
      
      </>

      
      
    );
  };
  
  export default ButtonBar;
 
  
  
  
  
  