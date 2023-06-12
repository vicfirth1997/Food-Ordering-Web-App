import RestCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
          
                {
                  resObj.map((restaurant)=>
                  <RestCard key={restaurant.data.id} resData={restaurant}/>)
                  // Each restaurant is an Object being given to the prop resData
                }
            </div>
        </div>
    )
  }
  export default Body;