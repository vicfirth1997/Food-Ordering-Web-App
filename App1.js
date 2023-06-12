import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestContainer
 *  -RestCard
 *      -Img
 *      -Name of res, Start rating,cuisine,delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */






const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


// Real data from the Swiggy api, any random restaurant
const resObj= [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "107605",
        "name": "Aubree",
        "uuid": "62fa18b2-95d5-4fe8-831a-bc76d0593c60",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "6a7973d432c533933de71326a0a3dde9",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "slaString": "41 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
          "restaurant": "aubree-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "421/A, Ground Floor, 6th Block, 80 Feet Main Road, Koramangala, Bengaluru, Karnataka 560095",
        "locality": "6th Block",
        "parentId": 3807,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7068660~p=1~eid=00000188-ab21-418e-13ca-915e00950113",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "107605",
          "deliveryTime": 41,
          "minDeliveryTime": 41,
          "maxDeliveryTime": 41,
          "lastMileTravel": 5.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "slaString": "42 MINS",
        "lastMileTravel": 7.199999809265137,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "lastMileTravel": 7.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "271",
        "name": "Meghana Foods",
        "uuid": "6769453d-609b-4798-a846-f25ee329049b",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "sotxv0gury7f7vrfvb2r",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "slaString": "44 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "meghana-foods-cmh-road-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "544, First Floor, NearIndiranagar Metro Station, CMH Road, Indiranagar, Bangalore",
        "locality": "CMH Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "271",
          "deliveryTime": 44,
          "minDeliveryTime": 44,
          "maxDeliveryTime": 44,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "109787",
        "name": "Chianti",
        "uuid": "b185d1e5-6180-455c-b26a-73820ca18a0b",
        "city": "1",
        "area": "MG Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "byb52jmakvfk71lqd0av",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Salads",
          "Pastas",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 125000,
        "costForTwoString": "₹1250 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
          "restaurant": "chianti-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "no.18, Ground floor, Ramanashree Arcade, Chianti Restaurant, MG Road, Opp. Oberoi Hotel",
        "locality": "MG Road",
        "parentId": 7396,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6918653~p=4~eid=00000188-ab21-418e-13ca-915f0095047e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "109787",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 4.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "427",
        "name": "Hotel Empire",
        "uuid": "ade1100f-32c4-4653-8fae-157081d74aa6",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "vumnivx75awxz9eo1czq",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 53,
        "minDeliveryTime": 53,
        "maxDeliveryTime": 53,
        "slaString": "53 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "hotel-empire-80-feet-road-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "80ft Road, HAL 2nd Stage, Next to BSNL, Indiranagar,, Bengaluru, Karnataka 560008",
        "locality": "Indiranagar",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "427",
          "deliveryTime": 53,
          "minDeliveryTime": 53,
          "maxDeliveryTime": 53,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "286339",
        "name": "Lucky Chan",
        "uuid": "1d63152f-936d-4896-babf-45a51053a2be",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "n0hkby4kxrxobujscb6d",
        "cuisines": [
          "Asian",
          "Chinese",
          "Japanese"
        ],
        "tags": [
          
        ],
        "costForTwo": 180000,
        "costForTwoString": "₹1800 FOR TWO",
        "deliveryTime": 56,
        "minDeliveryTime": 56,
        "maxDeliveryTime": 56,
        "slaString": "56 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
          "restaurant": "lucky-chan-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "594,12th Main Rd, HAL 2nd Stage, Indiranagar Bangalore - 560008",
        "locality": "HAL 2nd Stage",
        "parentId": 126611,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6918682~p=7~eid=00000188-ab21-418e-13ca-916000950775",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "286339",
          "deliveryTime": 56,
          "minDeliveryTime": 56,
          "maxDeliveryTime": 56,
          "lastMileTravel": 2.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "34301",
        "name": "Sri Udupi Park (100ft Road)",
        "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chaat",
          "Beverages",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 55,
        "minDeliveryTime": 55,
        "maxDeliveryTime": 55,
        "slaString": "55 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
          "restaurant": "sri-udupi-park-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
        "locality": "Defence Colony",
        "parentId": 194697,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "34301",
          "deliveryTime": 55,
          "minDeliveryTime": 55,
          "maxDeliveryTime": 55,
          "lastMileTravel": 3.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "5937",
        "name": "Burger King",
        "uuid": "41b91124-2ff4-45a8-a11c-4d40171bcbe2",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 52,
        "minDeliveryTime": 52,
        "maxDeliveryTime": 52,
        "slaString": "52 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "burger-king-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Salarpuria Plaza, No. 543, CMH Road, Nr Indira Nagar Metro station  Bangalore 560 038",
        "locality": "CMH Road",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "5937",
          "deliveryTime": 52,
          "minDeliveryTime": 52,
          "maxDeliveryTime": 52,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "444178",
        "name": "Magnolia Bakery",
        "uuid": "8cd8348a-2edd-4a13-8840-c2fc77396821",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "magnolia-bakery-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "J.K. Plaza, 788, 12th Main Rd, Indiranagar, Bengaluru, Karnataka 560038",
        "locality": "JK Plaza",
        "parentId": 267303,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6900981~p=10~eid=00000188-ab21-418e-13ca-916100950a09",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "444178",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "14552",
        "name": "Pizza Hut",
        "uuid": "8848cf96-5887-407a-9bc8-3db2d83ab047",
        "city": "1",
        "area": "Murugeshpalya",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "pizza-hut-old-airport-road-cv-raman-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 124 Ground Floor, Surya Chamber, Murgesh palya, Airport Road, Bangalore - 560017",
        "locality": "Murugeshpalya",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "14552",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "49189",
        "name": "Truffles",
        "uuid": "852cec33-2d9d-4a6d-8268-1f60ed297c4f",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "cuisines": [
          "American",
          "Desserts",
          "Italian",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 52,
        "minDeliveryTime": 52,
        "maxDeliveryTime": 52,
        "slaString": "52 MINS",
        "lastMileTravel": 4,
        "slugs": {
          "restaurant": "truffles-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "K.p Square,307,Ground floor, 100FT Road Binnamangala 1st stage bangalore 560038",
        "locality": "1st Stage",
        "parentId": 218065,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "49189",
          "deliveryTime": 52,
          "minDeliveryTime": 52,
          "maxDeliveryTime": 52,
          "lastMileTravel": 4,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "280495",
        "name": "Empire Juices and Desserts",
        "uuid": "fbc13eae-f9f2-4f35-a78b-20c6206072a4",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "t6t5kairwejurkhrcxmv",
        "cuisines": [
          "Ice Cream",
          "Juices"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "the-empire-juice-shop-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO.2990/B, 1B, 80 FEET ROAD, HAL 2ND STAGE, NEXT BSNL INDRANAGAR, BANGALORE-560001",
        "locality": "HAL 2nd Stage",
        "parentId": 387289,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7074841~p=13~eid=00000188-ab21-418e-13ca-916200950d79",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "280495",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "48581",
        "name": "Rotti Walla",
        "uuid": "5c2bbf06-7cc1-4f6b-9344-423d7130162e",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "kvlaq1ugkoozqr741zrv",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Beverages",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 47,
        "minDeliveryTime": 47,
        "maxDeliveryTime": 47,
        "slaString": "47 MINS",
        "lastMileTravel": 3.5,
        "slugs": {
          "restaurant": "tea-stories-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "1st floor, N 60 GNR Enclave appareddy playa, Indiranagar Double Rd, Bengaluru, 560038",
        "locality": "Appareddy Palya",
        "parentId": 9541,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "48581",
          "deliveryTime": 47,
          "minDeliveryTime": 47,
          "maxDeliveryTime": 47,
          "lastMileTravel": 3.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "69350",
        "name": "The Pizza Bakery",
        "uuid": "6bd89529-6ab5-42c9-967f-616d80989a17",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mjcivhhgcji3fdvp3ney",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 49,
        "minDeliveryTime": 49,
        "maxDeliveryTime": 49,
        "slaString": "49 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "the-pizza-bakery-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "2985, 1st floor 12th Main, HAL 2nd Stage, Indiranagar Bangalore 560038",
        "locality": "HAL 2nd Stage",
        "parentId": 11108,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7068604~p=16~eid=00000188-ab21-418e-13ca-91630095101d",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹1199",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "69350",
          "deliveryTime": 49,
          "minDeliveryTime": 49,
          "maxDeliveryTime": 49,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "13855",
        "name": "New Punjabi Hotel",
        "uuid": "b19252c7-1636-4113-8d9f-b0b735040817",
        "city": "1",
        "area": "Old Airport Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "f8jvvn9z87ok6uolgcvs",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "new-punjabi-hotel-murugesh-palya-old-airport-road",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#84/3, Old Airport Road, N R Colony, HAL Post, Murugesh Palya, Bangalore 560017",
        "locality": "Murgesh Pallya",
        "parentId": 1764,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "13855",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]





const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestCard 
                resData={resObj[0]}
                />
             <RestCard 
                resData={resObj[1]}
                />
                 <RestCard 
                resData={resObj[2]}
                />
                 <RestCard 
                resData={resObj[3]}
                />
                 <RestCard 
                resData={resObj[4]}
                />
                 <RestCard 
                resData={resObj[5]}
                />
                 <RestCard 
                resData={resObj[6]}
                />
            </div>
        </div>
    )
}

const RestCard=(props)=> {
  const {resData} = props;

    return (
        <div className="res-card">
             <img className="res-logo"
             src=
             {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/sotxv0gury7f7vrfvb2r"
             + resData.data.cloudinaryImageId
             }/> 
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.cuisines}</h4>
            <h4>{resData.data.costForTwoString}</h4>
            <h4>{resData.data.deliveryTime} minutes</h4>
        </div>
    )
}

root.render(<AppLayout/>)