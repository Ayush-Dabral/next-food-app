export type Location = {
  id: string;
  location: string;
  city_id: string;
};

export type Mealtype = {
  id: string;
  mealtype: string;
  content: string;
  image: string;
};

export type Restaurant = {
  id: string;
  restaurant_name: string;
  locality: string;
  thumb: string;
  cost: number;
  contact_number: number;
  address: string;
};
