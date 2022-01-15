import actionTypes from './actionTypes';

export function toggleWishlist(wishlist) {
  return {
    type: actionTypes.TOGGLE_WISHLIST,
    wishlist,
  };
}


export function addWishlists(wishlists) {
  return {
    type: actionTypes.ADD_WISHLISTS,
    wishlists,
  };
}
export function toggleLoadingWishlist(bool) {
  return {
    type: actionTypes.TOGGLE_WISHLIST_LOADING,
    bool
  };
}
export function removeWishlist(id) {
  return {
    type: actionTypes.REMOVE_WISHLIST,
    wishlistId: id
  };
}
