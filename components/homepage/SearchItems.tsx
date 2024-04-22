"use client";

import LocationAutocomplete from "./LocationAutocomplete";
import RestaurantAutocomplete from "./RestaurantAutocomplete";
import { Location, Restaurant } from "@/lib/definitions";

const SearchItems = ({locationsList, restaurantList}: {locationsList:Array<Location>, restaurantList:Array<Restaurant>}) => {
  return (
    <div className="w-full text-black flex flex-col justify-center gap-4 md:flex-row md:w-auto">
      {/* location autocomplete */}
      <div className="w-full">
        <LocationAutocomplete locationList={locationsList} />
      </div>

      {/* restaurant autocomplete */}
      <div className="w-full">
        <RestaurantAutocomplete restaurantList = {restaurantList} />
      </div>
    </div>
  );
};

export default SearchItems;