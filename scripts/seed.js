const { db } = require('@vercel/postgres');
const {
  restaurants,
  locations,
  mealtypes,
  users,
  cityList
} = require('../app/lib/placeholder-data.js');

async function seedCities(client) {
  try {
    // Ensure the "uuid-ossp" extension is enabled
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "cities" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cuisines (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      cuisine VARCHAR(255) NOT NULL,
      restaurant_id UUID REFERENCES restaurants(id)
    )
    `;

    console.log(`Created "cities" table`);

    // Insert data into the "cities" table
    const insertedCities = await Promise.all(
      restaurants.map(async (res) => {
        const resname = res.name;
        return Promise.all(
          res.Cuisine.map(async (cuisine) => {
            await client.sql`
            INSERT INTO cuisines (cuisine, restaurant_id) VALUES (${cuisine.name}, (Select id from restaurants where restaurant_name = ${resname}))
            `;
          })
        );
      })
    );

    console.log(`Seeded ${insertedCities.length} cities`);

    return {
      createTable,
      cities: insertedCities,
    };
  } catch (error) {
    console.error('Error seeding cities:', error);
    throw error;
  }
}

// async function seedLocations(client) {
//   try {
//     // Ensure the "uuid-ossp" extension is available
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "locations" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS locations (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         location VARCHAR(255) NOT NULL,
//         city_id UUID REFERENCES cities(id)
//       )
//     `;
    
//     console.log(`Created "locations" table`);

//     // Insert data into the "locations" table
//     const insertedLocations = [];
//     for (const location of locations) {
//       // Fetch the city_id synchronously
//       const cityIdQueryResult = await client.sql`
//         SELECT id FROM cities WHERE city = ${location.city}
//       `.rows;
      
//       // Check if any result was returned
//       if (cityIdQueryResult && cityIdQueryResult.length > 0) {
//         const cityId = cityIdQueryResult[0].id;

//         // Insert the location
//         const insertLocationQuery = await client.sql`
//           INSERT INTO locations (location, city_id)
//           VALUES (${location.name}, ${cityId})
//           ON CONFLICT (id) DO NOTHING
//         `;
//         insertedLocations.push(insertLocationQuery);
//       } else {
//         console.log(`City "${location.city}" not found. Skipping location insertion.`);
//       }
//     }

//     console.log(`Seeded ${insertedLocations.length} locations`);

//     return {
//       createTable,
//       locations: insertedLocations,
//     };
//   } catch (error) {
//     console.error('Error seeding locations:', error);
//     throw error;
//   }
// }



// async function seedRestaurants(client) {
//   try {
//     // Create restaurants table
//     await client.query(`
//       CREATE TABLE IF NOT EXISTS restaurants (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         restaurant_name VARCHAR(255) NOT NULL,
//         locality VARCHAR(255) NOT NULL,
//         thumb VARCHAR(255) NOT NULL,
//         cost INT NOT NULL,
//         contact_number VARCHAR(255),
//         address TEXT NOT NULL
//       )
//     `);

//     // Create restaurant_mealtypes table
//     await client.query(`
//       CREATE TABLE IF NOT EXISTS restaurant_mealtypes (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         mealtype_id UUID REFERENCES mealtypes(id),
//         restaurant_id UUID REFERENCES restaurants(id)
//       )
//     `);

//     // Create cuisine table
//     await client.query(`
//       CREATE TABLE IF NOT EXISTS cuisine (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         cuisine VARCHAR(255) NOT NULL,
//         restaurant_id UUID REFERENCES restaurants(id)
//       )
//     `);

//     // Seed restaurants
//     for (const restaurant of restaurants) {
//       const { name, locality, thumb, cost, contact_number, address} = restaurant;

//       // Insert restaurant into restaurants table
//       const restaurantResult = await client.query(
//         `INSERT INTO restaurants (restaurant_name, locality, thumb, cost, contact_number, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
//         [name, locality, thumb, cost, contact_number, address]
//       );

//       // const restaurantId = restaurantResult.rows[0].id;

//       // // Insert meal types into restaurant_mealtypes table
//       // for (const mealType of type) {
//       //   // Fetch the meal type ID from the mealtypes table
//       //   const mealTypeIdResult = await client.query(
//       //     `SELECT id FROM mealtypes WHERE mealtype = $1`,
//       //     [mealType.name] // Assuming mealType.name contains the meal type name
//       //   );

//       //   // Check if any rows were returned
//       //   if (mealTypeIdResult.rows.length > 0) {
//       //     const mealTypeId = mealTypeIdResult.rows[0].id;

//       //     // Insert into restaurant_mealtypes table
//       //     await client.query(
//       //       `INSERT INTO restaurant_mealtypes (mealtype_id, restaurant_id) VALUES ($1, $2)`,
//       //       [mealTypeId, restaurantId]
//       //     );
//       //   } else {
//       //     console.error(`Meal type "${mealType.name}" not found.`);
//       //   }
//       // }

//       // Insert cuisine into cuisine table
//       // for (const cuisineType of Cuisine) {
//       //   await client.query(
//           `INSERT INTO cuisine (cuisine, restaurant_id) VALUES ($1, $2)`,
//           [cuisineType.name, restaurantId]
//       //   );
//       // }
//     }

//     console.log('Database seeding completed successfully.');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// }




// async function seedMealtype(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS restaurant_mealtypes (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         mealtype VARCHAR(30) NOT NULL,
//         content TEXT NOT NULL,
//         image VARCHAR(50) NOT NULL
//       );
//     `;

//     console.log(`Created "mealtype" table`);

//     // Insert data into the "revenue" table
//     const insertedMealtype = await Promise.all(
//       restaurants.map(
//         (res) => client.sql`
//         INSERT INTO mealtypes (mealtype, content, image)
//         VALUES (${rev.name}, ${rev.content}, ${rev.image})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedMealtype.length} revenue`);

//     return {
//       createTable,
//       mealtype: insertedMealtype,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

// async function hi(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     console.log(restaurants.length)
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

async function main() {
  const client = await db.connect();
  
  // await seedRestaurants(client);
  await seedCities(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
