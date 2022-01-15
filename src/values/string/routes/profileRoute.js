import webRoute from "./webRoute";



const profileRoute = () => ({
  MY_ORDER: `${webRoute().PROFILE}/my-order`,
  // MY_REVIEW: `${webRoute().PROFILE}/my-review`,
  MY_DISCOUNT_COUPONS: `${webRoute().PROFILE}/my-discount-coupons`,
  MY_USER_INFORMATION: `${webRoute().PROFILE}/my-user-information`,
  MY_ADDRESSES: `${webRoute().PROFILE}/my-addresses`,
  REGISTERED_CREDIT_CARDS: `${webRoute().PROFILE}/registered-credit-cards`,
  MY_NOTIFICATIONS: `${webRoute().PROFILE}/my-notifications`,
  PROFILE_SUPPORT: `${webRoute().PROFILE}/profile-support`,
});
export default profileRoute;
