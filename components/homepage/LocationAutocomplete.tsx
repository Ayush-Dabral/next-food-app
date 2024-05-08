"use client";

import { Dispatch, SetStateAction } from "react";
import { LocationCombobox } from "./Combobox";
import { Location } from "@/lib/definitions";

const LocationAutocomplete = ({locationList, setLocation}: {locationList:Array<Location> , setLocation:Dispatch<SetStateAction<string>>}) => {

    console.log(typeof locationList)

    return ( 
        <div className="flex justify-center ">
            <LocationCombobox search="location" locationList = {locationList} setLocation={setLocation} />
        </div>
     );
}
 
export default LocationAutocomplete;