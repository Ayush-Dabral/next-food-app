import { sql } from '@vercel/postgres';
import { Location, Mealtype } from './definitions';

export async function fetchMealtypes() {
    try {
        const data = await sql<Mealtype>`SELECT * FROM mealtypes`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch mealtype data.');
    }
}

export async function fetchLocations() {
    try {
        const data = await sql<Location>`SELECT address FROM restaurants`;
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch location data.');
    }
    
}