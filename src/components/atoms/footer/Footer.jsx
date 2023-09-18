import pinterest from "../../../assets/pinterest.svg"
import instagram from "../../../assets/instagram.svg"

function Footer() {


    return (
      <>

<footer>
    <div className="bg-blue-300">
    <div className="max-w-2xl mx-auto text-white py-4">
        <div className="text-center">
            <h3 className="text-3xl mb-2"> Start drinking water today </h3>
            <p> Stay hydrated. All day, every day. </p>
            <div className="flex justify-center my-4">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                    <img src={pinterest} className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'>See you on </p>
                        <p className="text-sm md:text-base"> Pinterest</p>
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src={instagram} className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-gray-200'> See you on </p>
                        <p className="text-sm md:text-base"> Instagram </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
            <p className="order-2 md:order-1 mt-2git  md:mt-0"> &copy;Aqua Check, 2023. </p>
            <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
</footer>  
      </>
    )
  }
  

  export default Footer
  