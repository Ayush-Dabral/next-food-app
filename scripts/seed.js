const { db } = require('@vercel/postgres');
const {
  restaurants,
  locations,
  mealtypes,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedLocations(client) {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS locations (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city_id INT NOT NULL,
    location_id INT NOT NULL,
    country_name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "locations" table`);

    // Insert data into the "invoices" table
    const insertedLocations = await Promise.all(
      locations.map(
        (invoice) => client.sql`
        INSERT INTO locations (id, name, city_id, location_id, country_name)
        VALUES (${invoice['_id']}, ${invoice.name}, ${invoice.city_id}, ${invoice.location_id}, ${invoice.country_name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedLocations.length} locations`);

    return {
      createTable,
      locations: insertedLocations,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedRestaurants(client) {
  try {
    // Create the "restaurants" table if it doesn't exist
    const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS restaurants (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city_name VARCHAR(255) NOT NULL,
        city INT NOT NULL,
        area INT NOT NULL,
        locality VARCHAR(255) NOT NULL,
        thumb VARCHAR(255) NOT NULL,
        cost INT NOT NULL,
        contact_number VARCHAR(255),
        address TEXT NOT NULL
      );
    `);

    // Create the "meal_type" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS meal_type (
        id SERIAL PRIMARY KEY,
        restaurant_id INT REFERENCES restaurants(id),
        mealtype INT NOT NULL,
        name VARCHAR(255) NOT NULL
      );
    `);

    // Create the "cuisine" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS cuisine (
        id SERIAL PRIMARY KEY,
        restaurant_id INT REFERENCES restaurants(id),
        cuisine INT NOT NULL,
        name VARCHAR(255) NOT NULL
      );
    `);

    console.log(`Created "restaurants", "meal_type", and "cuisine" tables`);

    // Insert data into the "restaurants" table
    const insertedRestaurants = await Promise.all(
      restaurants.map(async (restaurant) => {
        const { _id, name, city_name, city, area, locality, thumb, cost, contact_number, address, type, Cuisine } = restaurant;

        try {
          // Insert restaurant information into the "restaurants" table
          const restaurantQuery = `
            INSERT INTO restaurants (id, name, city_name, city, area, locality, thumb, cost, contact_number, address)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            ON CONFLICT (id) DO NOTHING;
          `;
          await client.query(restaurantQuery, [_id, name, city_name, city, area, locality, thumb, cost, contact_number, address]);

          // Insert type information into the "meal_type" table
          await Promise.all(
            type.map(async (typeItem) => {
              const typeQuery = `
                INSERT INTO meal_type (restaurant_id, mealtype, name)
                VALUES ($1, $2, $3);
              `;
              await client.query(typeQuery, [_id, typeItem.mealtype, typeItem.name]);
            })
          );

          // Insert cuisine information into the "cuisine" table
          await Promise.all(
            Cuisine.map(async (cuisineItem) => {
              const cuisineQuery = `
                INSERT INTO cuisine (restaurant_id, cuisine, name)
                VALUES ($1, $2, $3);
              `;
              await client.query(cuisineQuery, [_id, cuisineItem.cuisine, cuisineItem.name]);
            })
          );

          console.log(`Inserted restaurant with ID ${_id}`);
        } catch (error) {
          console.error(`Error inserting restaurant with ID ${_id}:`, error);
        }
      })
    );

    console.log(`Seeded ${insertedRestaurants.length} restaurants`);

    return {
      createTable,
      restaurants: insertedRestaurants,
    };
  } catch (error) {
    console.error('Error seeding restaurants:', error);
    throw error;
  }
}

async function seedMealtype(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS mealtype (
        int INT NOT NULL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        content VARCHAR(255) NOT NULL,
        image VARCHAR(20) NOT NULL,
      );
    `;

    console.log(`Created "mealtype" table`);

    // Insert data into the "revenue" table
    const insertedMealtype = await Promise.all(
      mealtypes.map(
        (rev) => client.sql`
        INSERT INTO mealtype (id, name, content, image)
        VALUES (${rev['_id']}, ${rev.name}, ${rev.content}, ${rev.image})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedMealtype.length} revenue`);

    return {
      createTable,
      mealtype: insertedMealtype,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function hi(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    console.log(restaurants.length)
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  
  await hi(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
