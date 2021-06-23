import { GET_PRODUCT } from "./productTypes";

const initialState = {
  productArray: [],
};
const updatedArray = {
  productArray: [
    { _id: 1, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 2, type: "Non-Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 3, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 4, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 5, type: "Non-Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 6, type: "Non-Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 7, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 8, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 9, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 10, type: "Non-Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 11, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 12, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 13, type: "Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 14, type: "Non-Fiction", name: "Monk Who Sold His Ferrary" },
    { _id: 15, type: "Fiction", name: "Monk Who Sold His Ferrary" },
  ],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        ...updatedArray,
      };
      break;

    default:
      return state;
  }
};
export default productReducer;
