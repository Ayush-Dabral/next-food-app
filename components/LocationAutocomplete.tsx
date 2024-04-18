"use client";

import { useState } from "react";
import { ComboboxDemo } from "./Combobox";

const LocationAutocomplete = () => {
    const [location, setlocation] = useState("location")
    return ( 
        <div>
            <ComboboxDemo search="location" location={location} />
        </div>
     );
}
 
export default LocationAutocomplete;