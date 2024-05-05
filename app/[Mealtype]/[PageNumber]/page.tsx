import { getUniqueCuisines } from "@/actions/cuisine";
import { getLocations } from "@/actions/locations";
import { getRestaurants } from "@/actions/restaurants";
import { Filter } from "@/components/filter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MealtypePage = async ({
  params,
}: {
  params: { Mealtype: string; PageNumber: number };
}) => {
  const restaurant_details = await getRestaurants(
    params.Mealtype,
    params.PageNumber
  );
  const restaurants = restaurant_details?.restaurants;
  const restaurant_pages =
    restaurant_details?.restaurant_count !== undefined
      ? restaurant_details?.restaurant_count % 3 === 0
        ? Math.floor(restaurant_details?.restaurant_count / 3)
        : Math.floor(restaurant_details?.restaurant_count / 3) + 1
      : 0;
  const locations = await getLocations();
  const cuisines = await getUniqueCuisines();
  const pages: number[] = Array.from(
    { length: restaurant_pages },
    (_, index) => index + 1
  );

  return (
    <div className=" w-full">
      <div className="w-10/12 mx-auto">
        <h1 className=" text-myHeadings text-xl font-bold mt-8 mb-3 md:text-4xl md:mt-9 md:mb-7">
          {params.Mealtype} Places
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <Filter locations={locations} cuisines={cuisines} />
        <div className=" md:w-4/6">
          {Array.isArray(restaurants) &&
            restaurants.map((restaurant) => (
              <section
                className="w-full mx-auto max-w-[600px] mb-6 flex flex-col shadow-lg border-t-[1px] md:w-11/12 md:max-w-[800px] md:mx-0 md:ml-6"
                key={restaurant?.restaurant_data?.id}
              >
                <Link href={`/restaurants/${restaurant?.restaurant_data?.id}`}>
                  <div className="py-6 w-full flex items-center">
                    <div className="w-2/6">
                      <div className=" w-4/6 max-w-28 mx-auto aspect-square rounded-lg relative">
                        <Image
                          src={`/assets/food-avatar.png`}
                          alt="Restaurant Thumbnail"
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className=" w-4/6 ">
                      <div className="mx-auto flex flex-col">
                        <h2 className=" text-myHeadings text-xl font-semibold md:text-3xl">
                          {restaurant?.restaurant_data?.restaurant_name}
                        </h2>
                        <p className=" text-myDescriptions text-xs md:text-base">
                          {restaurant?.restaurant_data?.address}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t-[1px] text-sm grid grid-flow-row grid-rows-2 md:text-lg">
                    <div className="grid grid-cols-2">
                      <div className=" text-myDescriptions text-center flex items-center">
                        CUISINES:
                      </div>
                      <div className=" text-myHeadings ">
                        <ul className="flex items-center">
                          <li className="inline-block">
                            {restaurant?.cuisine
                              .map((cuisine) => cuisine.cuisine)
                              .join(", ")}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className=" text-myDescriptions text-center flex items-center">
                        COST FOR TWO:
                      </div>
                      <div className=" text-myHeadings flex items-center">
                        {restaurant?.restaurant_data?.cost}
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            ))}
          <div className="flex items-center justify-center mb-6 gap-x-2">
            <Button
              className=" h-8 w-8 p-0 border-2 border-[#8C96AB] aspect-square text-[#8C96AB]"
              variant="link"
              disabled={params.PageNumber == 1 ? true : false}
            >
              <Link href={`/${params.Mealtype}/${params.PageNumber - 1}`}>
                <ChevronLeft />
              </Link>
            </Button>
            {pages.map((page) => {
              return (
                <Button
                  className="h-8 w-8 p-0 border-2 border-[#8C96AB] aspect-square text-[#8C96AB]"
                  variant="link"
                  key={page}
                >
                  <Link href={`/${params.Mealtype}/${page}`}>{page}</Link>
                </Button>
              );
            })}
            <Button
              className="h-8 w-8 p-0 border-2 border-[#8C96AB] aspect-square text-[#8C96AB]"
              variant="link"
              disabled={params.PageNumber == restaurant_pages ? true : false}
            >
              <Link href={`/${params.Mealtype}/${+params.PageNumber + 1}`}>
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealtypePage;
