"use client";

import React, { useState } from "react";
import { Location } from "@/lib/definitions";
import { FaChevronDown } from "react-icons/fa";

interface cuisine {
  id: string;
  cuisine: string;
}

export const Filter = ({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: cuisine[];
}) => {
  const [open, setOpen] = useState(true);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    <section className="w-9/12 max-w-[400px] mx-auto mb-4 bg-white text-[#8C96AB] text-sm md:w-2/6 md:flex md:justify-end md:h-fit">
      <button
        className="relative w-full h-12 px-4 flex items-center justify-between shadow-xl border-[1px] md:hidden"
        type="button"
        onClick={onClick}
      >
        <span className="text-myHeadings font-semibold">Filter/Sort</span>
        <FaChevronDown />
      </button>
      {open && (
        <div className="w-full border-[1px] shadow-lg py-3 md:w-11/12">
          <div className=" w-11/12 mx-auto flex flex-col gap-y-4">
            <h2 className=" font-semibold text-myHeadings text-lg">Filters</h2>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-myHeadings text-sm">
                Select Location
              </h3>
              <select
                name="locations"
                id="locations"
                className=" h-9 rounded-sm border-[1px] border-[#8C96AB] text-[#8C96AB]"
              >
                <option value="null">Select Location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.location}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-myHeadings text-sm">
                Cuisine
              </h3>

              {cuisines.map((cuisine) => {
                return (
                  <div key={cuisine.id} className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      id={cuisine.id}
                      name={cuisine.cuisine}
                      
                      value={cuisine.id}
                    />
                    <label htmlFor={cuisine.id}>{cuisine.cuisine}</label>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-myHeadings text-sm">
                Cost for two
              </h3>

              <div className=" flex items-center gap-x-2">
                <input type="radio" id="0" name="cost for two" value="0" />
                <label htmlFor="0">Less than ₹500</label>
              </div>
              <div className=" flex items-center gap-x-2">
                <input type="radio" id="500" name="cost for two" value="500" />
                <label htmlFor="500">₹ 500 to ₹1000</label>
              </div>
              <div className=" flex items-center gap-x-2">
                <input
                  type="radio"
                  id="1000"
                  name="cost for two"
                  value="1000"
                />
                <label htmlFor="1000">₹1000 to ₹1500</label>
              </div>
              <div className=" flex items-center gap-x-2">
                <input
                  type="radio"
                  id="1500"
                  name="cost for two"
                  value="1500"
                />
                <label htmlFor="1500">₹1500 to ₹2000</label>
              </div>
              <div className=" flex items-center gap-x-2">
                <input
                  type="radio"
                  id="2000"
                  name="cost for two"
                  value="2000"
                />
                <label htmlFor="2000">₹2000+</label>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-myHeadings text-sm">Sort</h3>

              <div className=" flex items-center gap-x-2">
                <input
                  type="radio"
                  id="Price low to high"
                  name="sort"
                  value="Price low to high"
                />
                <label htmlFor="Price low to high">Price low to high</label>
              </div>
              <div className=" flex items-center gap-x-2">
                <input
                  type="radio"
                  id="Price high to low"
                  name="sort"
                  value="Price high to low"
                />
                <label htmlFor="Price high to low">Price high to low</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
