import RestCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {


    const [listOfRestaurants,setListOfRestaurants] = useState([]);
       
    useEffect(()=>{
        axios.get(SWIGGY_API).then((res)=>{
            setListOfRestaurants(res?.data?.data?.cards[2]?.data?.data?.cards);
        });
    },[]);

    return listOfRestaurants.length===0?<Shimmer/>:(

        <div className="body">

            {/* <div className="search">
                Search
            </div> */}
            
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={
                    ()=>{
                   const filteredList=listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4
                    );
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
                <span>
                    <button className="back-filter-btn" 
                    onClick={
                        ()=>{
                    
                        axios.get(SWIGGY_API).then((res)=>{
                            setListOfRestaurants(res?.data?.data?.cards[2]?.data?.data?.cards);
                        });
                        }
                    }>Back</button>
                </span>

            </div>

            <div className="res-container">
          
                {
                  listOfRestaurants.map((restaurant)=>
                  <RestCard key={restaurant.data.id} resData={restaurant}/>)
                
                }
            </div>
        </div>
    )
  }
  export default Body;