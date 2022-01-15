
import { TOGGLE_WISHLIST, ADD_WISHLISTS, TOGGLE_WISHLIST_LOADING, REMOVE_WISHLIST } from './actionTypes';

export const wishlists = { data: [], loading: false };

const appReducer = (state = wishlists, action) => {
  let newState = [];
  let isWishlist;
  switch (action.type) {
    case TOGGLE_WISHLIST:

      newState = state.data.filter((data, index) => {
        if (data.variant._id !== action.wishlist._id) return data;
        else isWishlist = index + 1

      }) || []


      if (!isWishlist) newState = { ...state, data: [...state.data, action.wishlist] }

      return { ...state, data: newState };
    case ADD_WISHLISTS:
      return { ...state, data: action.wishlists };
    case TOGGLE_WISHLIST_LOADING:
      return { ...state, loading: action.bool };
    case REMOVE_WISHLIST:
      return {
        ...state, data: state.data.filter((data) => {
          if (data.variant._id !== action.wishlistId) return data;
        })
      };

    default:
      return state;
  }
}

export default appReducer;
