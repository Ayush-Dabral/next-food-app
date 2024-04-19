"use client";

import * as React from "react";
import { Check, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { inputHandler } from "@/lib/features/location/locationSlice";
import { Location, Restaurant } from "@/lib/definitions";

interface locationCombobox {
  search: string;
  locationList: any;
}

export function LocationCombobox({ search, locationList }: locationCombobox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();
  const selectedLocation = useAppSelector((state) => state.location.value)
  console.log(selectedLocation)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[250px] flex justify-start xs:w-[350px] md:w-[250px]",
            value === "" ? "text-[#636F88] font-normal" : " text-myHeadings"
          )}
        >
          {value
            ? locationList.find(
                (location: Location) => location.location === value
              )?.location
            : `Please select a ${search}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0 xs:w-[350px] md:w-[250px]">
        <Command>
          <CommandInput placeholder={`Search ${search}...`} />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            <CommandList className="h-[150px] overflow-y-scroll overscroll-contain scroll-smooth">
              {locationList.map((location: Location) => (
                <CommandItem
                  key={location.id}
                  value={location.location}
                  onSelect={(currentValue) => {
                    
                    dispatch(inputHandler(currentValue === value ? "" : currentValue));
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === location.location ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {location.location}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function RestaurantCombobox({ restaurantList }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const selectedLocation = useAppSelector((state) => state.location.value)

  return (
    
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[250px] flex justify-start xs:w-[350px] md:w-[350px]",
            value === "" ? "text-[#636F88] font-normal" : " text-myHeadings"
          )}
        >
          {value === "" && <Search className=" text-[#74819E] mr-2 w-4 h-4 shrink-0 opacity-50" />}
          {value
            ? restaurantList.find(
                (restaurant: Restaurant) => restaurant.restaurant_name === value
              )?.restaurant_name
            : `Select Restaurant`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0 xs:w-[350px] md:w-[350px]">
        <Command>
          <CommandInput placeholder={`Search Restaurants...`} />
          <CommandEmpty>No restaurant found.</CommandEmpty>
          <CommandGroup>
            <CommandList className="h-[150px] overflow-y-scroll overscroll-contain scroll-smooth">
              {selectedLocation === "" && restaurantList.map((restaurant: Restaurant) => (
                <CommandItem
                  key={restaurant.id}
                  value={restaurant.restaurant_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  
                  <Avatar className="mx-2">
                    <AvatarImage className=" object-cover" src="/assets\food-avatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className=" w-full mx-auto flex flex-col">
                    <h4 className=" w-11/12 mx-auto text-myHeadings font-bold">{restaurant.restaurant_name}</h4>
                    <p className=" w-11/12 mx-auto  text-myDescriptions text-xs">{restaurant.locality}</p>
                  </div>
                </CommandItem>
              ))}
              {selectedLocation !== "" && restaurantList.map((restaurant: Restaurant) => {
                if(restaurant.locality.toLowerCase().includes(selectedLocation.toLowerCase())) {
                  return (
                <CommandItem
                  key={restaurant.id}
                  value={restaurant.restaurant_name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  
                  <Avatar className="mx-2">
                    <AvatarImage className=" object-cover" src="/assets\food-avatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className=" w-full mx-auto flex flex-col">
                    <h4 className=" w-11/12 mx-auto text-myHeadings font-bold">{restaurant.restaurant_name}</h4>
                    <p className=" w-11/12 mx-auto  text-myDescriptions text-xs">{restaurant.locality}</p>
                  </div>
                </CommandItem>
              )}
              else {
                return null;
              }
              })}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
