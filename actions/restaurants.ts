import { restaurants } from "@/app/lib/placeholder-data";
import { db } from "@/lib/db";
import { Restaurant } from "@/lib/definitions";
import { getMealtypebyMealtypeName } from "@/lib/mealtypes";

export const getRestaurants = async (mealtype_name: string, pageNumber:number) => {
    if(!mealtype_name) {
        return { error: "Incorrect mealtype name!" }
    }
    const mealtype = await getMealtypebyMealtypeName(mealtype_name);

    if(!mealtype) {
        return { error: "Invalid mealtype!" }
    }

    const restaurant_count = await db.restaurant_mealtypes.count({
        where: { mealtype_id: mealtype.id }
    })

    const restaurant_ids = await db.restaurant_mealtypes.findMany( {
        skip: (pageNumber-1)*3,
        take: 3,
        where: { mealtype_id: mealtype.id },
    })
    try {
        const restaurants = await Promise.all(restaurant_ids.map(async (restaurant) => {
            if (!restaurant.restaurant_id) return null;
        
            const rest = await db.restaurants.findFirst({
                where: { id: restaurant.restaurant_id }
            });
            const cuisine = await db.cuisines.findMany({
                where: {restaurant_id: restaurant.restaurant_id}
            })
            
            return { restaurant_data:rest, cuisine: cuisine};
        })); 
        return { restaurants: restaurants,restaurant_count: restaurant_count }
    } catch (error) {
        return null;
    }
};
