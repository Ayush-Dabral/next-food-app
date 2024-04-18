"use client";

import LocationAutocomplete from "./LocationAutocomplete";
import RestaurantAutocomplete from "./RestaurantAutocomplete";

const SearchItems = () => {
  return (
    <div className="text-black flex flex-col gap-4 md:flex-row">
      {/* location autocomplete */}
      <div>
        <LocationAutocomplete />
      </div>

      {/* restaurant autocomplete */}
      <div>
        <RestaurantAutocomplete />
      </div>
    </div>
  );
};

export default SearchItems;
