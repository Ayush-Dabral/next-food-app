"use client";

import { useState } from "react";
import { LocationCombobox } from "./Combobox";

const LocationAutocomplete = ({locationList}: any) => {
    return ( 
        <div className="text-black">
            <LocationCombobox search="location" locationList = {locationList} />
        </div>
     );
}
 
export default LocationAutocomplete;