"use client";

import { useState } from "react";
import { LocationCombobox } from "./Combobox";

const LocationAutocomplete = ({locationList}: any) => {
    return ( 
        <div className="flex justify-center ">
            <LocationCombobox search="location" locationList = {locationList} />
        </div>
     );
}
 
export default LocationAutocomplete;