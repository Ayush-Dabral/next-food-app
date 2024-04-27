import { getRestaurants } from "@/actions/restaurants";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
var open = false;

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
  const restaurant_count = restaurant_details?.restaurant_count;

  const onClick = () => {
    open = !open;
  };
  return (
    <div className=" w-full">
      <div className="w-10/12 mx-auto">
        <h1 className=" text-myHeadings text-xl font-bold ">
          {params.Mealtype} Places
        </h1>
        <section>
          <button
            className="relative w-full h-10 px-4 flex items-center justify-between text-myHeadings font-semibold shadow-xl border-[1px] md:hidden"
            type="button"
          >
            <span>Filter/Sort</span>
            <FaChevronDown />
          </button>
          {open && <div className="absolute ">hi</div>}
        </section>
      </div>

      <div className="w-full">
        {Array.isArray(restaurants) &&
          restaurants.map((restaurant) => (
            <section
              className="w-full my-6 flex flex-col shadow-lg border-t-[1px]"
              key={restaurant?.restaurant_data?.id}
            >
              <Link href={`/restaurants/${restaurant?.restaurant_data?.id}`}>
                <div className="h-[140px] w-full flex items-center">
                  <div className="w-2/6">
                    <div className=" w-16 h-16 mx-auto aspect-square rounded-lg">
                      <Image
                        src="/assets/food-avatar.png"
                        alt="Restaurant Thumbnail"
                        width={1000}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
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
                    <div className=" text-myHeadings flex items-center">
                      <ul className="">
                        {restaurant?.cuisine.map((cuisine) => {
                          return <li className="block" key={cuisine.id}> {cuisine.cuisine}, </li>;
                        })}
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
      </div>
    </div>
  );
};

export default MealtypePage;
