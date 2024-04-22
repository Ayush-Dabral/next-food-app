import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Location, Mealtype, Restaurant } from "./definitions";
import { db } from "./db";

export async function fetchMealtypes() {
  noStore();
  try {
    const data = await sql<Mealtype>`SELECT * FROM mealtypes`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch mealtype data.");
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
    try {
      const user = await db.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      return null;
    }
  };

export async function fetchRestaurants() {
  noStore();
  try {
    const data = await sql<Restaurant>`SELECT * FROM restaurants`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch restaurant data.");
  }
}

export async function fetchLocations() {
  noStore();
  try {
    const data = await sql<Location>`SELECT * FROM locations`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch location data.");
  }
}

export async function fetchCityId(city: string) {
  noStore();
  try {
    const data =
      await sql<Location>`SELECT id FROM cities where city = '${city}'`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch location data.");
  }
}
