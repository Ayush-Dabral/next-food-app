import { db } from "@/lib/db";
import { Location } from "@/lib/definitions"; // Assuming you have a Location type defined

export const getLocations = async (): Promise<Location[]> => {
    try {
        const locations = await db.locations.findMany();
        return locations; // Return the locations array
    } catch (error) {
        // Handle the error or log it
        console.error("Error fetching locations:", error);
        throw new Error("Failed to fetch locations. Please try again later."); // Throw a new error or handle it accordingly
    }
}
