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
    name: "Gulab",
    city_name: "Delhi",
    area: "11",
    locality: "Pitampura, New Delhi",
    thumb: "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
    cost: 450,
    contact_number: "45352462",
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
      "content": "Elevate your afternoon with our lunchtime indulgences",
      "image": "assets/lunch.png"
  },
  {
      "_id": "3",
      "name": "Dinner",
      "content": "Embrace evening elegance with our curated dinner delights",
      "image": "assets/dinner.png"
  },
  {
      "_id": "4",
      "name": "Snacks",
      "content": "Satisfy cravings with our exclusive snack sensations",
      "image": "assets/snacks.png"
  },
  {
      "_id": "5",
      "name": "Drinks",
      "content": "Toast to exclusivity with our handcrafted drink collection",
      "image": "assets/drinks.png"
  },
  {
      "_id": "6",
      "name": "NightLife",
      "content": "Ignite the night with our exclusive nightlife offerings",
      "image": "assets/nightlife.png"
  }
]

const cityList = [
  {
      "state": "Andaman and Nicobar Islands",
      "cities": [
          "Port Blair"
      ]
  },
  {
      "state": "Andhra Pradesh",
      "cities": [
          "Adoni",
          "Amaravati",
          "Anantapur",
          "Chandragiri",
          "Chittoor",
          "Dowlaiswaram",
          "Eluru",
          "Guntur",
          "Kadapa",
          "Kakinada",
          "Kurnool",
          "Machilipatnam",
          "Nagarjunakoṇḍa",
          "Rajahmundry",
          "Srikakulam",
          "Tirupati",
          "Vijayawada",
          "Visakhapatnam",
          "Vizianagaram",
          "Yemmiganur"
      ]
  },
  {
      "state": "Arunachal Pradesh",
      "cities": [
          "Itanagar"
      ]
  },
  {
      "state": "Assam",
      "cities": [
          "Dhuburi",
          "Dibrugarh",
          "Dispur",
          "Guwahati",
          "Jorhat",
          "Nagaon",
          "Sivasagar",
          "Silchar",
          "Tezpur",
          "Tinsukia"
      ]
  },
  {
      "state": "Bihar",
      "cities": [
          "Ara",
          "Barauni",
          "Begusarai",
          "Bettiah",
          "Bhagalpur",
          "Bihar Sharif",
          "Bodh Gaya",
          "Buxar",
          "Chapra",
          "Darbhanga",
          "Dehri",
          "Dinapur Nizamat",
          "Gaya",
          "Hajipur",
          "Jamalpur",
          "Katihar",
          "Madhubani",
          "Motihari",
          "Munger",
          "Muzaffarpur",
          "Patna",
          "Purnia",
          "Pusa",
          "Saharsa",
          "Samastipur",
          "Sasaram",
          "Sitamarhi",
          "Siwan"
      ]
  },
  {
      "state": "Chandigarh",
      "cities": [
          "Chandigarh"
      ]
  },
  {
      "state": "Chhattisgarh",
      "cities": [
          "Ambikapur",
          "Bhilai",
          "Bilaspur",
          "Dhamtari",
          "Durg",
          "Jagdalpur",
          "Raipur",
          "Rajnandgaon"
      ]
  },
  {
      "state": "Dadra and Nagar Haveli and Daman and Diu",
      "cities": [
          "Daman",
          "Diu",
          "Silvassa"
      ]
  },
  {
      "state": "Delhi",
      "cities": [
          "Delhi",
          "New Delhi"
      ]
  },
  {
      "state": "Goa",
      "cities": [
          "Madgaon",
          "Panaji"
      ]
  },
  {
      "state": "Gujarat",
      "cities": [
          "Ahmadabad",
          "Amreli",
          "Bharuch",
          "Bhavnagar",
          "Bhuj",
          "Dwarka",
          "Gandhinagar",
          "Godhra",
          "Jamnagar",
          "Junagadh",
          "Kandla",
          "Khambhat",
          "Kheda",
          "Mahesana",
          "Morbi",
          "Nadiad",
          "Navsari",
          "Okha",
          "Palanpur",
          "Patan",
          "Porbandar",
          "Rajkot",
          "Surat",
          "Surendranagar",
          "Valsad",
          "Veraval"
      ]
  },
  {
      "state": "Haryana",
      "cities": [
          "Ambala",
          "Bhiwani",
          "Chandigarh",
          "Faridabad",
          "Firozpur Jhirka",
          "Gurugram",
          "Hansi",
          "Hisar",
          "Jind",
          "Kaithal",
          "Karnal",
          "Kurukshetra",
          "Panipat",
          "Pehowa",
          "Rewari",
          "Rohtak",
          "Sirsa",
          "Sonipat"
      ]
  },
  {
      "state": "Himachal Pradesh",
      "cities": [
          "Bilaspur",
          "Chamba",
          "Dalhousie",
          "Dharmshala",
          "Hamirpur",
          "Kangra",
          "Kullu",
          "Mandi",
          "Nahan",
          "Shimla",
          "Una"
      ]
  },
  {
      "state": "Jammu and Kashmir (union territory)",
      "cities": [
          "Anantnag",
          "Baramula",
          "Doda",
          "Gulmarg",
          "Jammu",
          "Kathua",
          "Punch",
          "Rajouri",
          "Srinagar",
          "Udhampur"
      ]
  },
  {
      "state": "Jharkhand",
      "cities": [
          "Bokaro",
          "Chaibasa",
          "Deoghar",
          "Dhanbad",
          "Dumka",
          "Giridih",
          "Hazaribag",
          "Jamshedpur",
          "Jharia",
          "Rajmahal",
          "Ranchi",
          "Saraikela"
      ]
  },
  {
      "state": "Karnataka",
      "cities": [
          "Badami",
          "Ballari",
          "Bengaluru",
          "Belagavi",
          "Bhadravati",
          "Bidar",
          "Chikkamagaluru",
          "Chitradurga",
          "Davangere",
          "Halebid",
          "Hassan",
          "Hubballi-Dharwad",
          "Kalaburagi",
          "Kolar",
          "Madikeri",
          "Mandya",
          "Mangaluru",
          "Mysuru",
          "Raichur",
          "Shivamogga",
          "Shravanabelagola",
          "Shrirangapattana",
          "Tumakuru",
          "Vijayapura"
      ]
  },
  {
      "state": "Kerala",
      "cities": [
          "Alappuzha",
          "Vatakara",
          "Idukki",
          "Kannur",
          "Kochi",
          "Kollam",
          "Kottayam",
          "Kozhikode",
          "Mattancheri",
          "Palakkad",
          "Thalassery",
          "Thiruvananthapuram",
          "Thrissur"
      ]
  },
  {
      "state": "Ladakh",
      "cities": [
          "Kargil",
          "Leh"
      ]
  },
  {
      "state": "Madhya Pradesh",
      "cities": [
          "Balaghat",
          "Barwani",
          "Betul",
          "Bharhut",
          "Bhind",
          "Bhojpur",
          "Bhopal",
          "Burhanpur",
          "Chhatarpur",
          "Chhindwara",
          "Damoh",
          "Datia",
          "Dewas",
          "Dhar",
          "Dr. Ambedkar Nagar (Mhow)",
          "Guna",
          "Gwalior",
          "Hoshangabad",
          "Indore",
          "Itarsi",
          "Jabalpur",
          "Jhabua",
          "Khajuraho",
          "Khandwa",
          "Khargone",
          "Maheshwar",
          "Mandla",
          "Mandsaur",
          "Morena",
          "Murwara",
          "Narsimhapur",
          "Narsinghgarh",
          "Narwar",
          "Neemuch",
          "Nowgong",
          "Orchha",
          "Panna",
          "Raisen",
          "Rajgarh",
          "Ratlam",
          "Rewa",
          "Sagar",
          "Sarangpur",
          "Satna",
          "Sehore",
          "Seoni",
          "Shahdol",
          "Shajapur",
          "Sheopur",
          "Shivpuri",
          "Ujjain",
          "Vidisha"
      ]
  },
  {
      "state": "Maharashtra",
      "cities": [
          "Ahmadnagar",
          "Akola",
          "Amravati",
          "Aurangabad",
          "Bhandara",
          "Bhusawal",
          "Bid",
          "Buldhana",
          "Chandrapur",
          "Daulatabad",
          "Dhule",
          "Jalgaon",
          "Kalyan",
          "Karli",
          "Kolhapur",
          "Mahabaleshwar",
          "Malegaon",
          "Matheran",
          "Mumbai",
          "Nagpur",
          "Nanded",
          "Nashik",
          "Osmanabad",
          "Pandharpur",
          "Parbhani",
          "Pune",
          "Ratnagiri",
          "Sangli",
          "Satara",
          "Sevagram",
          "Solapur",
          "Thane",
          "Ulhasnagar",
          "Vasai-Virar",
          "Wardha",
          "Yavatmal"
      ]
  },
  {
      "state": "Manipur",
      "cities": [
          "Imphal"
      ]
  },
  {
      "state": "Meghalaya",
      "cities": [
          "Cherrapunji",
          "Shillong"
      ]
  },
  {
      "state": "Mizoram",
      "cities": [
          "Aizawl",
          "Lunglei"
      ]
  },
  {
      "state": "Nagaland",
      "cities": [
          "Kohima",
          "Mon",
          "Phek",
          "Wokha",
          "Zunheboto"
      ]
  },
  {
      "state": "Odisha",
      "cities": [
          "Balangir",
          "Baleshwar",
          "Baripada",
          "Bhubaneshwar",
          "Brahmapur",
          "Cuttack",
          "Dhenkanal",
          "Kendujhar",
          "Konark",
          "Koraput",
          "Paradip",
          "Phulabani",
          "Puri",
          "Sambalpur",
          "Udayagiri"
      ]
  },
  {
      "state": "Puducherry",
      "cities": [
          "Karaikal",
          "Mahe",
          "Puducherry",
          "Yanam"
      ]
  },
  {
      "state": "Punjab",
      "cities": [
          "Amritsar",
          "Batala",
          "Chandigarh",
          "Faridkot",
          "Firozpur",
          "Gurdaspur",
          "Hoshiarpur",
          "Jalandhar",
          "Kapurthala",
          "Ludhiana",
          "Nabha",
          "Patiala",
          "Rupnagar",
          "Sangrur"
      ]
  },
  {
      "state": "Rajasthan",
      "cities": [
          "Abu",
          "Ajmer",
          "Alwar",
          "Amer",
          "Barmer",
          "Beawar",
          "Bharatpur",
          "Bhilwara",
          "Bikaner",
          "Bundi",
          "Chittaurgarh",
          "Churu",
          "Dhaulpur",
          "Dungarpur",
          "Ganganagar",
          "Hanumangarh",
          "Jaipur",
          "Jaisalmer",
          "Jalor",
          "Jhalawar",
          "Jhunjhunu",
          "Jodhpur",
          "Kishangarh",
          "Kota",
          "Merta",
          "Nagaur",
          "Nathdwara",
          "Pali",
          "Phalodi",
          "Pushkar",
          "Sawai Madhopur",
          "Shahpura",
          "Sikar",
          "Sirohi",
          "Tonk",
          "Udaipur"
      ]
  },
  {
      "state": "Sikkim",
      "cities": [
          "Gangtok",
          "Gyalshing",
          "Lachung",
          "Mangan"
      ]
  },
  {
      "state": "Tamil Nadu",
      "cities": [
          "Arcot",
          "Chengalpattu",
          "Chennai",
          "Chidambaram",
          "Coimbatore",
          "Cuddalore",
          "Dharmapuri",
          "Dindigul",
          "Erode",
          "Kanchipuram",
          "Kanniyakumari",
          "Kodaikanal",
          "Kumbakonam",
          "Madurai",
          "Mamallapuram",
          "Nagappattinam",
          "Nagercoil",
          "Palayamkottai",
          "Pudukkottai",
          "Rajapalayam",
          "Ramanathapuram",
          "Salem",
          "Thanjavur",
          "Tiruchchirappalli",
          "Tirunelveli",
          "Tiruppur",
          "Thoothukudi",
          "Udhagamandalam",
          "Vellore"
      ]
  },
  {
      "state": "Telangana",
      "cities": [
          "Hyderabad",
          "Karimnagar",
          "Khammam",
          "Mahbubnagar",
          "Nizamabad",
          "Sangareddi",
          "Warangal"
      ]
  },
  {
      "state": "Tripura",
      "cities": [
          "Agartala"
      ]
  },
  {
      "state": "Uttar Pradesh",
      "cities": [
          "Agra",
          "Aligarh",
          "Amroha",
          "Ayodhya",
          "Azamgarh",
          "Bahraich",
          "Ballia",
          "Banda",
          "Bara Banki",
          "Bareilly",
          "Basti",
          "Bijnor",
          "Bithur",
          "Budaun",
          "Bulandshahr",
          "Deoria",
          "Etah",
          "Etawah",
          "Faizabad",
          "Farrukhabad-cum-Fatehgarh",
          "Fatehpur",
          "Fatehpur Sikri",
          "Ghaziabad",
          "Ghazipur",
          "Gonda",
          "Gorakhpur",
          "Hamirpur",
          "Hardoi",
          "Hathras",
          "Jalaun",
          "Jaunpur",
          "Jhansi",
          "Kannauj",
          "Kanpur",
          "Lakhimpur",
          "Lalitpur",
          "Lucknow",
          "Mainpuri",
          "Mathura",
          "Meerut",
          "Mirzapur-Vindhyachal",
          "Moradabad",
          "Muzaffarnagar",
          "Partapgarh",
          "Pilibhit",
          "Prayagraj",
          "Rae Bareli",
          "Rampur",
          "Saharanpur",
          "Sambhal",
          "Shahjahanpur",
          "Sitapur",
          "Sultanpur",
          "Tehri",
          "Varanasi"
      ]
  },
  {
      "state": "Uttarakhand",
      "cities": [
          "Almora",
          "Dehra Dun",
          "Haridwar",
          "Mussoorie",
          "Nainital",
          "Pithoragarh"
      ]
  },
  {
      "state": "West Bengal",
      "cities": [
          "Alipore",
          "Alipur Duar",
          "Asansol",
          "Baharampur",
          "Bally",
          "Balurghat",
          "Bankura",
          "Baranagar",
          "Barasat",
          "Barrackpore",
          "Basirhat",
          "Bhatpara",
          "Bishnupur",
          "Budge Budge",
          "Burdwan",
          "Chandernagore",
          "Darjeeling",
          "Diamond Harbour",
          "Dum Dum",
          "Durgapur",
          "Halisahar",
          "Haora",
          "Hugli",
          "Ingraj Bazar",
          "Jalpaiguri",
          "Kalimpong",
          "Kamarhati",
          "Kanchrapara",
          "Kharagpur",
          "Cooch Behar",
          "Kolkata",
          "Krishnanagar",
          "Malda",
          "Midnapore",
          "Murshidabad",
          "Nabadwip",
          "Palashi",
          "Panihati",
          "Purulia",
          "Raiganj",
          "Santipur",
          "Shantiniketan",
          "Shrirampur",
          "Siliguri",
          "Siuri",
          "Tamluk",
          "Titagarh"
      ]
  }
]

const locations = [
  {
      "name": "Pathri Bagh, Dehradun",
      "city": "Dehra dun",
  },
  {
    "name": "Pitampura, New Delhi",
    "city": "Delhi"
  },
  {
    "name": "Ashok Vihar Phase 2, Delhi",
    "city": "Delhi"
  },
  {
    "name": "Borivali West, Mumbai",
    "city": "Mumbai"
  }
]

module.exports = {
  users,
  restaurants,
  mealtypes,
  locations,
  cityList
};
