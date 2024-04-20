"use client"

import { Restaurant } from "@/lib/definitions";
import { RestaurantCombobox } from "./Combobox";

const RestaurantAutocomplete = ({restaurantList}: {restaurantList:Array<Restaurant>}) => {
    return ( 
        <div className=" flex justify-center">
            <RestaurantCombobox restaurantList={restaurantList}/>
        </div>
     );
}
 
export default RestaurantAutocomplete;