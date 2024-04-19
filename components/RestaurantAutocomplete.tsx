"use client"

import { RestaurantCombobox } from "./Combobox";

const RestaurantAutocomplete = ({restaurantList}: any) => {
    return ( 
        <div className=" flex justify-center">
            <RestaurantCombobox restaurantList={restaurantList}/>
        </div>
     );
}
 
export default RestaurantAutocomplete;