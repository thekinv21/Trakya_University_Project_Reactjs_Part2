const BASE_URL = process.env.REACT_APP_API_ADDRESS;

export const END_POINTS = {
  USER_CONTROLLER: {
    POST_RESET_PASSWORD: `${BASE_URL}/api/user/reset-password`,
    DELETE_USER: `${BASE_URL}/api/user/:id`,
  },
  AUTH_CONTROLLER: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
    ME: `${BASE_URL}/api/auth/me`,
  },
  RESTAURANT_CONTROLLER: {
    GET_RANDOM_RESTAURANT: `${BASE_URL}/api/restaurant/random/:length`,
    GET_RESTAURANT: `${BASE_URL}/api/restaurant`,
    GET_RESTAURANT_BY_ID: `${BASE_URL}/api/restaurant/:id`,
    GET_RESTAURANT_EMPTY_HOURS: `${BASE_URL}/api/restaurant/:id/book/slots?localDate=:date`,
    GET_RESTAURANT_WITH_PARAMS: `${BASE_URL}/api/restaurant?page=:page&size=:size`,
    GET_RESTAURANT_FILTERED: `${BASE_URL}/api/restaurant`,
    GET_RESTAURANT_REVİEWS : `${BASE_URL}/api/review/restaurant/:restId`,
    POST_RESTAURANT_REVİEW : `${BASE_URL}/api/review`
  },
  FAVORITE_CONTROLLER: {
    POST_FAVORITE_RESTAURANT: `${BASE_URL}/api/favorite/toggle`,
    GET_FAVORITE_RESTAURANTS: `${BASE_URL}/api/favorite/user/:userId`,
  },
  MENU_CONTROLLER: {
    GET_MENU: `${BASE_URL}/api/food/:id`,
    GET_MENU_BY_RESTAURANT_ID: `${BASE_URL}/api/food/restaurant/:restId?page=:page&size=3`,
  },
  CATEGORY_CONTROLLER: {
    GET_CATEGORY: `${BASE_URL}/api/category`,
    GET_CATEGORY_BY_ID: `${BASE_URL}/api/category/:id`,
  },
  RESERVE_CONTROLLER: {
    POST_RESERVE: `${BASE_URL}/api/book`,
    GET_RESERVE_BY_USER_ID: `${BASE_URL}/api/book/user/:userId`,
    PUT_RESERVE: `${BASE_URL}/api/book`,
    DELETE_RESERVE_BY_ID: `${BASE_URL}/api/book/:reserveId`,
  },
};

