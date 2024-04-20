"use client";

import { LocationCombobox } from "./Combobox";
import { Location } from "@/lib/definitions";

const LocationAutocomplete = ({locationList}: {locationList:Array<Location>}) => {

    console.log(typeof locationList)

    return ( 
        <div className="flex justify-center ">
            <LocationCombobox search="location" locationList = {locationList} />
        </div>
     );
}
 
export default LocationAutocomplete;