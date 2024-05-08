"use client";

import { useState } from "react";
import LocationAutocomplete from "./LocationAutocomplete";
import RestaurantAutocomplete from "./RestaurantAutocomplete";
import { Location, Restaurant } from "@/lib/definitions";

const SearchItems = ({locationsList, restaurantList}: {locationsList:Array<Location>, restaurantList:Array<Restaurant>}) => {

  const [location, setLocation] = useState("")

  return (
    <div className="w-full text-black flex flex-col justify-center gap-4 md:flex-row md:w-auto">
      {/* location autocomplete */}
      <div className="w-full">
        <LocationAutocomplete locationList={locationsList} setLocation={setLocation} />
      </div>

      {/* restaurant autocomplete */}
      <div className="w-full">
        <RestaurantAutocomplete restaurantList = {restaurantList} location={location} />
      </div>
    </div>
  );
};

export default SearchItems;
