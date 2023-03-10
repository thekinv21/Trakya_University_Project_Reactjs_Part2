import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [
    {
      id: 0,
      title: "Elit Restorant",
      imgURL:
        "https://qul.imgix.net/b81bd307-bf30-4519-9c93-ac0bb8b72e7d/40935_sld.jpg?auto=format&w=230&h=156&fit=crop",
      city: "İstanbul ",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Et",
      district: "Merkez",
      star: 1,
      price: 3,
      most_rated: 2,
      liked: false,
    },
    {
      id: 1,
      title: "Osteria Francescana",
      imgURL:
        "https://www.mewithmysuitcase.com/wp-content/uploads/2019/03/OsteriaFrancescana28529.jpg",
      city: "Sivas ",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Et",
      district: "Merkez",
      star: 4,
      price: 1,
      most_rated: 4,
      liked: false,
    },
    {
      id: 2,
      title: "Mikla",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7PIP14FbifDPk59UecDOUcY2rCi9MYLYvjuBYT70opjdc_XAjs7w-DKWBBB2OGDmIwE&usqp=CAU",
      city: "Sivas ",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Et",
      district: "Merkez",
      star: 3.5,
      price: 5,
      most_rated: 1,
      liked: false,
    },
    {
      id: 3,
      title: "Neolokal",
      imgURL:
        "https://qul.imgix.net/2fe3dc84-9cdf-4462-ba32-4cbab5375da2/510116_sld.jpg?auto=format&w=781",
      city: "Afyonkarahisar",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Çin Mutfağı",
      district: "Merkez",
      star: 4,
      price: 2,
      most_rated: 2,
      liked: false,
    },
    {
      id: 4,
      title: "Zuma",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7PIP14FbifDPk59UecDOUcY2rCi9MYLYvjuBYT70opjdc_XAjs7w-DKWBBB2OGDmIwE&usqp=CAU",
      city: "Afyonkarahisar",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Pastane",
      district: "Merkez",
      star: 4,
      price: 3,
      most_rated: 1,
      liked: false,
    },
    {
      id: 5,
      title: "Ent Restaurant",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxBhhZ-RSLWYnYW8-8DPhku0FegwHD4VudQzsZLA3a_GgaVfQ2GLQpwuxlyIaZbWZuDo&usqp=CAU",
      city: "Edirne",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "İtalyan Mutfağı",
      district: "Merkez",
      star: 2,
      price: 3,
      most_rated: 5,
      liked: false,
    },
    {
      id: 6,
      title: "Mürver Restaurant Novotel",
      imgURL:
        "http://www.murverrestaurant.com/wp-content/uploads/2019/11/murver_yeni_30.jpg",
      city: "Edirne",
      detailedAddress: "Karaağaç Mah, Lozan Cd. No:6, 22030 Merkez/Edirne",
      category: "Amerikan Mutfağı",
      district: "Merkez",
      star: 3,
      price: 1,
      most_rated: 4,
      liked: false,
    },
  ],
  restaurant_reservations: [
    {
      id: 0,
      title: "Elit Restorant",
      imgURL:
        "https://www.thegalataistanbul.com/wp-content/uploads/sites/73/2021/03/Mesai7-1500x999.jpg",
      numberOfPeople: "2",
      comment: "Cam kenari olsun",
      Date: "12/12/2022 Saat: 16.30",
      star: 1,
      price: 3,
      liked: false,
    },
    {
      id: 1,
      title: "Osteria Francescana",
      imgURL:
        "https://www.mewithmysuitcase.com/wp-content/uploads/2019/03/OsteriaFrancescana28529.jpg",
      numberOfPeople: "4",
      comment: "Girişe yakin olsun",
      Date: "26/03/2023 Saat: 21.30",
      star: 4.5,
      price: 1,
      liked: false,
    },
    {
      id: 2,
      title: "Mikla",
      imgURL:
        "https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
      numberOfPeople: "2",
      comment: "Terasta olsun",
      Date: "01/02/2023 Saat: 14.00",
      star: 3.5,
      price: 5,
      liked: false,
    },
  ],
  restaurant_menu: [
    {
      id: "94298",
      name: "3 Chicken Wings",
      position: 1,
      description: "Tender, Spicy and Juicy. Original or Peri-Crusted",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94301",
      name: "Chicken Livers and Portuguese Roll",
      position: 2,
      description:
        "Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94304",
      name: "Spicy Mixed Olives (V)",
      position: 3,
      description: "Co-Starring Garlic, Pepper and Chili",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94307",
      name: "Hummus with PERI-PERI Drizzle (V)",
      position: 4,
      description:
        "Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94310",
      name: "Red Pepper Dip (V)",
      position: 5,
      description:
        "Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94313",
      name: "Appeteaser Platter",
      position: 6,
      description: "Choose any Three Appeteasers",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94316",
      name: "All Together Now (V)",
      position: 7,
      description:
        "Spicy Mixed Olives, Red Pepper Dip, Hummus with PERi-PERi Drizzle and Warm Pita Strips",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94220",
      name: "3 Chicken Wings",
      position: 1,
      description: "Tender, Spicy and Juicy. Original or Peri-Crusted",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94321",
      name: "Chicken Livers and Portuguese Roll",
      position: 2,
      description:
        "Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94322",
      name: "Spicy Mixed Olives (V)",
      position: 3,
      description: "Co-Starring Garlic, Pepper and Chili",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94323",
      name: "Hummus with PERI-PERI Drizzle (V)",
      position: 4,
      description:
        "Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94324",
      name: "Red Pepper Dip (V)",
      position: 5,
      description:
        "Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94325",
      name: "Appeteaser Platter",
      position: 6,
      description: "Choose any Three Appeteasers",
      images: [],
      category_name: "Appeteasers",
    },
    {
      id: "94326",
      name: "All Together Now (V)",
      position: 7,
      description:
        "Spicy Mixed Olives, Red Pepper Dip, Hummus with PERi-PERi Drizzle and Warm Pita Strips",
      images: [],
      category_name: "Appeteasers",
    },
  ],
  restaurant_category: [
    {
      id: 0,
      category: "Balık",
      imgURL:
        "https://i.lezzet.com.tr/images-xxlarge-secondary/degisik-balik-yemekleri-tavada-firinda-farkli-balik-tarifleri-480bd553-bebf-4fac-85cf-4901c7081022.jpg",
    },
    {
      id: 1,
      category: "Et",
      imgURL:
        "https://harbiyiyorum.com/wp-content/uploads/1-Nusret-Steakhouse1.jpg",
    },
    {
      id: 2,
      category: "Türk Mutfağı",
      imgURL:
        "https://deraliyerestaurant.com/wp-content/uploads/2022/01/Famous-Turkish-Cuisine-Meals-1030x687.jpg",
    },
    {
      id: 3,
      category: "Çin Mutfağı",
      imgURL:
        "https://i.nefisyemektarifleri.com/2018/01/23/cindeki-yemekler-ve-cin-yemek-tarifleri-uzerine.jpg",
    },
    {
      id: 4,
      category: "Pastane",
      imgURL:
        "https://www.uzaypastanesi.com/images/category/mini_Untitled%20Capture0076_Todp.jpg",
    },
    {
      id: 5,
      category: "İtalyan Mutfağı",
      imgURL: "https://supstranger.com/media/blog/italyan-yemekleri.png",
    },
    {
      id: 6,
      category: "Amerikan Mutfağı",
      imgURL:
        "https://i.lezzet.com.tr/images-800x600/8d50af05-7b08-49b8-81fe-bae41463eaca-3967659c-36ad-4b00-bbac-0d36a90d0f9e",
    },
    {
      id: 7,
      category: "Vejeteryan",
      imgURL:
        "https://www.diyetliyiz.com/wp-content/uploads/2017/11/Vejetaryen-Diyet-Listesi-ve-Yemek-Plan%C4%B1.jpg",
    },
  ],
};

export const Restaurants = createSlice({
  name: "Restaurants",
  initialState,

  reducers: {},
});

export default Restaurants.reducer;
