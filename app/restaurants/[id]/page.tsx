import { getRestaurantById } from "@/actions/restaurants";
import Image from "next/image";

const RestaurantPage = async ({ params }: { params: { id: string } }) => {
  const restaurant = await getRestaurantById(params.id);

  return (
    <div className="w-full my-3">
        {restaurant && (
            <div className="w-full md:w-10/12 md:mx-auto">
                {/* Image section */}
                <div className="w-full aspect-[2] relative">
                    <Image
                    src={restaurant.thumb}
                    alt={`${restaurant.restaurant_name}'s Thumbnail`}
                    objectFit="cover"
                    fill
                    />
                </div>

            </div>
        )}
    </div>
  );
};

export default RestaurantPage;
