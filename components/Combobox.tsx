"use client";

import * as React from "react";
import { Check } from "lucide-react";

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
import { useAppDispatch } from "@/lib/hooks";
import { inputHandler } from "@/lib/features/location/locationSlice";
import { Location } from "@/lib/definitions";

interface comboboxx {
  search: string;
  locationList: any;
}

export function LocationCombobox({ search, locationList }: comboboxx) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-[200px] justify-between",
            value === "" ? "text-[#636F88] font-normal" : " text-myHeadings"
          )}
        >
          {value
            ? locationList.find((location:Location) => location.location === value)?.location
            : `Please select a ${search}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
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
                    console.log(currentValue);
                    console.log(value);
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    dispatch(inputHandler(currentValue));
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

// export function RestaurantCombobox({ search, List, location }: comboboxx) {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");
//   const dispatch = useAppDispatch();

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : `Select ${search}`}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder={`Search ${search}...`} />
//           <CommandEmpty>No framework found.</CommandEmpty>
//           <CommandGroup>
//             <CommandList>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? "" : currentValue);
//                     setOpen(false);
//                     if (location != "") {
//                       dispatch(inputHandler(currentValue));
//                     }
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === framework.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandList>
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
