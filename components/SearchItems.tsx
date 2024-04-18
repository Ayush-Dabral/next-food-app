"use client";

import LocationAutocomplete from "./LocationAutocomplete";
import RestaurantAutocomplete from "./RestaurantAutocomplete";
import { Location } from "@/lib/definitions";

const SearchItems = ({locationsList, restaurantList}: any) => {
  return (
    <div className="text-black flex flex-col justify-center gap-4 md:flex-row">
      {/* location autocomplete */}
      <div>
        <LocationAutocomplete locationList={locationsList} />
      </div>

      {/* restaurant autocomplete */}
      <div>
        <RestaurantAutocomplete restaurantList = {restaurantList} />
      </div>
    </div>
  );
};

export default SearchItems;
