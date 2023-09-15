import Tracker from "../components/atoms/tracker/Tracker";
const userId = 1;

function Homepage() {
    return (
    <>
        
        <h1 className='flex flex-col items-center my-10'> HomePage</h1>
        <p className='flex flex-col items-center'>Bienvenido Usuario {userId}</p>
        <Tracker></Tracker>
    </>
    );
  }
  
  export default Homepage;
  