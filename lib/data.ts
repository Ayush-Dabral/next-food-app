import { sql } from '@vercel/postgres';
import { Mealtype } from './definitions';

export async function fetchMealtypes() {
    try {
        const data = await sql<Mealtype>`SELECT * FROM mealtype`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch mealtype data.');
    }
}