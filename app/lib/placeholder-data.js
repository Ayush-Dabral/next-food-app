// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const restaurants = [
  {
    _id: "1",
    name: "Gulab",
    city_name: "Delhi",
    city: "1",
    area: "11",
    locality: "Pitampura, New Delhi",
    thumb: "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
    cost: 450,
    contact_number: "45352465",
    address: "Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi",
    type: [
      {
        "mealtype": "1",
        "name": "breakfast"
      },
      {
        "mealtype": "3",
        "name": "dinner"
      }
    ],
    Cuisine: [
      {
        "cuisine": "1",
        "name": "North Indain"
      },
      {
        "cuisine": "4",
        "name": "Fast Food"
      }
    ]
  },
  {
    "_id": "2",
    "name": "Pandit Ji Paratha Hut",
    "locality": "Ashok Vihar Phase 2",
    "city_name": "Delhi",
    "city": "1",
    "area": "12",
    "address": "Shop 44, Plot C,  Ahok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
    "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
    "cost": 230,
    "contact_number": "45352465",
    "type": [
      {
        "mealtype": "1",
        "name": "breakfast"
      },
      {
        "mealtype": "3",
        "name": "dinner"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "1",
        "name": "North Indain"
      },
      {
        "cuisine": "3",
        "name": "Chinese"
      }
    ]
  },
  {
    "_id": "3",
    "name": "Food Adda",
    "locality": "Borivali West",
    "city_name": "Mumbai",
    "city": "2",
    "area": "21",
    "address": "Borivali West, Mumbai-210006, Mumbai",
    "thumb": "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
    "cost": 530,
    "contact_number": "467564",
    "type": [
      {
        "mealtype": "2",
        "name": "lunch"
      },
      {
        "mealtype": "3",
        "name": "dinner"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "3",
        "name": "Chinese"
      },
      {
        "cuisine": "4",
        "name": "FastFood"
      }
    ]
  },
  {
    "_id": "4",
    "name": "Apna Punjab",
    "locality": "Magarpatta",
    "city_name": "Pune",
    "city": "3",
    "area": "31",
    "address": "Borivali West, Mumbai-210006, Mumbai",
    "thumb": "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
    "cost": 670,
    "contact_number": "6508401",
    "type": [
      {
        "mealtype": "4",
        "name": "snacks"
      },
      {
        "mealtype": "5",
        "name": "drinks"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "1",
        "name": "North Indain"
      },
      {
        "cuisine": "2",
        "name": "South Indian"
      }
    ]
  },
  {
    "_id": "5",
    "name": "Empire Restaurant",
    "locality": "Rajajinagar",
    "city_name": "Bangalore",
    "city": "4",
    "area": "41",
    "address": "Rajajinagar, Bangalore-430006, Bangalore",
    "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
    "cost": 230,
    "contact_number": "8731537",
    "type": [
      {
        "mealtype": "1",
        "name": "breakfast"
      },
      {
        "mealtype": "5",
        "name": "drinks"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "2",
        "name": "South Indian"
      },
      {
        "cuisine": "4",
        "name": "FastFood"
      }
    ]
  },
  {
    "_id": "6",
    "name": "Captain Sams",
    "locality": "Sector70, Chandigarh",
    "city_name": "Chandigarh",
    "city": "5",
    "area": "51",
    "address": "Sector70, Chandigarh-515436",
    "thumb": "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
    "cost": 630,
    "contact_number": "123334",
    "type": [
      {
        "mealtype": "5",
        "name": "drinks"
      },
      {
        "mealtype": "6",
        "name": "nightlife"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "1",
        "name": "North Indain"
      },
      {
        "cuisine": "4",
        "name": "FastFood"
      }
    ]
  },
  {
    "_id": "7",
    "name": "AMA Cafe",
    "city_name": "Delhi",
    "city": "1",
    "area": "11",
    "locality": "Majnu ka Tila, New Delhi",
    "thumb": "https://b.zmtcdn.com/data/res_imagery/307374_RESTAURANT_6688d81a57b8da4bcf20d725de39a3d2.jpg",
    "cost": 450,
    "address": "House 6, New Colony, Majnu ka Tilla, New Delhi",
    "type": [
      {
        "mealtype": "2",
        "name": "lunch"
      },
      {
        "mealtype": "4",
        "name": "lunch"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "2",
        "name": "South Indian"
      },
      {
        "cuisine": "3",
        "name": "Chinese"
      }
    ]
  },
  {
    "_id": "8",
    "name": "Punjabi Angithi",
    "city_name": "Delhi",
    "city": "1",
    "area": "11",
    "locality": "Paschim Vihar, New Delhi",
    "thumb": "https://b.zmtcdn.com/data/pictures/3/307113/54e0e60a17086184f1e5a44d7f580b54.png",
    "cost": 350,
    "address": "32-22, A 4, DDA Market, Paschim Vihar, New Delhi",
    "type": [
      {
        "mealtype": "2",
        "name": "lunch"
      },
      {
        "mealtype": "4",
        "name": "lunch"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "2",
        "name": "South Indian"
      },
      {
        "cuisine": "3",
        "name": "Chinese"
      }
    ]
  },
  {
    "_id": "9",
    "name": "Rajinder Da Dhaba",
    "city_name": "Delhi",
    "city": "1",
    "area": "11",
    "locality": "Safdarjung, New Delhi",
    "thumb": "https://b.zmtcdn.com/data/pictures/9/7319/e1b7673ed0aa2993b55b177409d5596c.jpg",
    "cost": 380,
    "address": "AB 14, Safdarjung Enclave Market, Safdarjung, New Delhi",
    "type": [
      {
        "mealtype": "5",
        "name": "drinks"
      },
      {
        "mealtype": "6",
        "name": "nightlife"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "4",
        "name": "Fast Food"
      },
      {
        "cuisine": "5",
        "name": "Street Food"
      }
    ]
  },
  {
    "_id": "10",
    "name": "Diggin",
    "city_name": "Delhi",
    "city": "1",
    "area": "11",
    "locality": "Chanakyapuri, New Delhi",
    "thumb": "https://b.zmtcdn.com/data/pictures/3/307113/54e0e60a17086184f1e5a44d7f580b54.png",
    "cost": 650,
    "address": "10, Santushti Shopping Complex, Race Course Road, Chanakyapuri, New Delhi",
    "type": [
      {
        "mealtype": "5",
        "name": "drinks"
      },
      {
        "mealtype": "6",
        "name": "nightlife"
      }
    ],
    "Cuisine": [
      {
        "cuisine": "4",
        "name": "Fast Food"
      },
      {
        "cuisine": "5",
        "name": "Street Food"
      }
    ]
  }
]

const mealtypes = [
  {
      "_id": "1",
      "name": "Breakfast",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/breakfast.png"
  },
  {
      "_id": "2",
      "name": "Lunch",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/lunch.png"
  },
  {
      "_id": "3",
      "name": "Dinner",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/dinner.png"
  },
  {
      "_id": "4",
      "name": "Snacks",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/snacks.png"
  },
  {
      "_id": "5",
      "name": "Drinks",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/drinks.png"
  },
  {
      "_id": "6",
      "name": "NightLife",
      "content": "Start your day with exclusive breakfast options",
      "image": "assets/nightlife.png"
  }
]

const locations = [
  {
      "_id": "1",
      "name": "ShalimarBhagh, Delhi",
      "city_id": "1",
      "location_id": "1",
      "country_name": "India"
  },
  {
      "_id": "2",
      "name": "Janpat, Delhi",
      "city_id": "1",
      "location_id": "2",
      "country_name": "India"
  },
  {
      "_id": "3",
      "name": "MSP, Delhi",
      "city_id": "1",
      "location_id": "3",
      "country_name": "India"
  },
  {
      "_id": "4",
      "name": "MSP, Pune",
      "city_id": "2",
      "location_id": "4",
      "country_name": "India"
  },
  {
      "_id": "5",
      "name": "Anand Vihar, Delhi",
      "city_id": "1",
      "location_id": "5",
      "country_name": "India"
  },
  {
      "_id": "6",
      "name": "Mahadevapura, Bangalore",
      "city_id": "3",
      "location_id": "5",
      "country_name": "India"
  },
  {
      "_id": "7",
      "name": "Anna Nagar, Chennai",
      "city_id": "4",
      "location_id": "5",
      "country_name": "India"
  },
  {
      "_id": "8",
      "name": "Thane, Mumbai",
      "city_id": "5",
      "location_id": "5",
      "country_name": "India"
  }
]

module.exports = {
  users,
  restaurants,
  mealtypes,
  locations,
};
