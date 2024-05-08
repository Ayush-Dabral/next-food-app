"use client"

import { Restaurant } from "@/lib/definitions";
import { RestaurantCombobox } from "./Combobox";

const RestaurantAutocomplete = ({restaurantList, location}: {restaurantList:Array<Restaurant>, location: string}) => {
    return ( 
        <div className=" flex justify-center">
            <RestaurantCombobox restaurantList={restaurantList} selectedLocation={location} />
        </div>
     );
}
 
export default RestaurantAutocomplete;