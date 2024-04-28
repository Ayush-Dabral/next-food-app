import { db } from "@/lib/db";
import { Location } from "@/lib/definitions"; // Assuming you have a Location type defined

export const getUniqueCuisines = async () => {
    try {
        const cuisines = await db.cuisines.findMany({
            distinct: ['cuisine'],
            select: {
                id: true,
                cuisine: true,
            }          
        });
        return cuisines; // Return the cuisines array
    } catch (error) {
        // Handle the error or log it
        console.error("Error fetching cuisines:", error);
        throw new Error("Failed to fetch cuisines. Please try again later."); // Throw a new error or handle it accordingly
    }
}
