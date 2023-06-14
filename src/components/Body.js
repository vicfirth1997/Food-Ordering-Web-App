import RestCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

const Body = () => {


    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [searchText,setSearchText]=useState("");
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
                <button onClick={()=>{
               const filteredRest= listOfRestaurants.filter(
                        (res)=>{res.data.name.toLowerCase().includes(searchText.toLowerCase())}
                    );
                    setListOfRestaurants(filteredRest);
                }}>Search</button>
            </div>
                <button 
                className="filter-btn" 
                onClick={
                    ()=>{
                   const filteredList=listOfRestaurants.filter(
                        (res)=> res.data.avgRating>4
                    );
                    temp=listOfRestaurants;
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
                 filteredRest.map((restaurant)=>
                  <RestCard key={restaurant.data.id} resData={restaurant}/>)
                
                }
            </div>
        </div>
    )
  }
  export default Body;