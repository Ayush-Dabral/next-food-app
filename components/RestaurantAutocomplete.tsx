"use client"

import { RestaurantCombobox } from "./Combobox";

const RestaurantAutocomplete = ({restaurantList}: any) => {
    return ( 
        <div className=" w-full">
            <RestaurantCombobox restaurantList={restaurantList}/>
        </div>
     );
}
 
export default RestaurantAutocomplete;