import AllPartner from "./AllPartner";
import AllProductA from "./AllProductA";
import AllProductB from "./AllProductB";

function Bussines(props) {
  const {isMobile} = props;

  return (
    <div>
      {isMobile ? (
        <div>
         <AllPartner isMobile = {isMobile}/>
         <div className='divide' ></div>
         <AllProductA isMobile = {isMobile}/>
         <div className='divide' ></div>
         <AllProductB isMobile = {isMobile}/>
         </div>
      ) : (
        <div>
          <AllPartner isMobile = {isMobile}/>
          <div className='divide' ></div>
          <AllProductA isMobile = {isMobile}/>
          <div className='divide' ></div>
          <AllProductB isMobile = {isMobile}/>
        </div>
      )}
     

    </div>

  )
}

export default Bussines;
