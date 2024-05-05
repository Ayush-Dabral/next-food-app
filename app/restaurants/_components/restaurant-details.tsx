"use client"

import { Button } from "@/components/ui/button";
import { Cuisine, Restaurant } from "@/lib/definitions";
import Image from "next/image";
import { useState } from "react";

interface RestaurantDetailsProps {
  restaurant: Restaurant | null;
  cuisines: Cuisine[] | null;
}

export const RestaurantDetails = ({
  restaurant,
  cuisines,
}: RestaurantDetailsProps) => {
  const [currPage, setcurrPage] = useState("overview")

  if (!restaurant) return null; // Handle case when restaurant is null

  return (
    <div className="w-full text-myHeadings md:w-10/12 md:mx-auto">
      {/* Image section */}
      <div className="w-full aspect-[2] relative xs:aspect-[5/2] md:aspect-[3]">
        <Image
          src={restaurant.thumb}
          alt={`${restaurant.restaurant_name}'s Thumbnail`}
          objectFit="cover"
          fill
        />
      </div>
      <div className=" mx-6">
        <div className=" flex items-center">
          <div className=" mr-6 my-8 w-14 h-14 aspect-square rounded-lg md:hidden relative">
            <Image
              src={restaurant.thumb}
              alt={`${restaurant.restaurant_name}'s Thumbnail`}
              objectFit="cover"
              fill
              className=" rounded-lg"
            />
          </div>
          <h1 className=" text-xl font-semibold md:text-3xl">
            {restaurant.restaurant_name}
          </h1>
        </div>
        <div className="flex flex-wrap border-b-2 md:justify-between">
          <nav>
            <ul className="flex font-semibold text-sm md:text-lg">
              <li className={currPage == 'overview'?'border-b-2 border-red-400':""}>
                <Button variant="ghost" onClick={() => {
                  setcurrPage("overview")
                }}>Overview</Button>
              </li>
              <li className={currPage == 'contact'?'border-b-2 border-red-400':""}>
                <Button variant="ghost" onClick={() => {
                  setcurrPage("contact")
                  console.log(currPage);
                }}>Contact</Button>
              </li>
            </ul>
          </nav>
          <Button className=" text-white bg-[#CE0505]" onClick={() => {
            
          }}>
            Place Online Order
          </Button>
        </div>
        {currPage === "overview" && (
          <div className=" py-8 flex flex-col gap-y-8">
            <h2 className=" font-semibold">About this place</h2>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-sm">Cuisine</h3>
              <p className=" text-sm ">
                {cuisines?.map((cuisine) => cuisine.cuisine).join(", ")}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-sm">Average Cost</h3>
              <p className=" text-sm ">
                {`₹ ${restaurant.cost} for two people(approx.)`}
              </p>
            </div>
          </div>
        )}
        {currPage === "contact" && (
          <div className=" py-8 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-sm">Phone Number</h3>
              <p className=" text-sm text-[#F67082]">
                {restaurant.contact_number}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className=" font-semibold text-sm">{restaurant.restaurant_name}</h3>
              <p className=" text-sm ">
                {restaurant.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
