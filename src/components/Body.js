import RestCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {

    // for keeping the original list if all the restaurants
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    //to have the search bar value and get it update with the last input bar value
    const [searchText,setSearchText]=useState("");
    //this will contain all the filter changes and search bar changes 
     const [filteredRest,setFilteredRest] = useState([]);

    useEffect(()=>{
        axios.get(SWIGGY_API).then((res)=>{
            setListOfRestaurants(res?.data?.data?.cards[2]?.data?.data?.cards);
            setFilteredRest(res?.data?.data?.cards[2]?.data?.data?.cards);
        });
    },[]);

    
    return listOfRestaurants.length===0?<Shimmer/>:(

        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                const filteredRest= listOfRestaurants.filter(
                    (res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                setFilteredRest(filteredRest);
                }}>Search</button>
            </div>
                <button 
                className="filter-btn" 
                onClick={
                    ()=>{
                   const filteredList=listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4
                    );
                    setFilteredRest(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
                <span>
                    <button className="back-filter-btn" 
                    onClick={
                        ()=>{ 
                            setFilteredRest(listOfRestaurants);
                        }
                    }>Back</button>
                </span>

            </div>

            <div className="res-container">
          
                {
                filteredRest.map((restaurant)=>
                  <RestCard key={restaurant.data.id} resData={restaurant}/>)
                
                }
            </div>
        </div>
    )
  }
  export default Body;