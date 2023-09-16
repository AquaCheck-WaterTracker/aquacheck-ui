import Tracker from "../components/atoms/tracker/Tracker";
import ButtonBar from '../components/imagen-button-bar/ButtonBar'
const userId = 1;


function Homepage() {
    return (
    <>
        
        <h1 className='flex flex-col items-center my-10'> HomePage</h1>
        <p className='flex flex-col items-center'>Bienvenido Usuario {userId}</p>
        <Tracker></Tracker>
        <ButtonBar></ButtonBar>
        
    </>
    );
  }
  
  export default Homepage;
  