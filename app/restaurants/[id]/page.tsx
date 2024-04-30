import { getRestaurantById } from "@/actions/restaurants";
import { RestaurantDetails } from "../_components/restaurant-details";

const RestaurantPage = async ({ params }: { params: { id: string } }) => {
  const restaurant = await getRestaurantById(params.id);

  return (
    <div className="w-full my-3">
        {restaurant?.restaurant && restaurant.cuisines && (
            <RestaurantDetails restaurant={restaurant.restaurant} cuisines={restaurant.cuisines} />
        )}
    </div>
  );
};

export default RestaurantPage;

