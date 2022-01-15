const webRoute = () => {
  return {
    HOME: "/",
    PRODUCT: `/product`,
    SINGING: `/sign-in`,
    SIGNUP: `/sign-up`,
    FORGET_PASSWORD: `/forget-password`,
    RESET_PASSWORD: `/reset-password`,
    SEARCH: `/:search`,
    SLUG_PAGE: `/page`,
    PROFILE: `/profile`,
    CART: `/cart`,
    SUPPORT: `/support`,
    SHIPPING: `/shipping`,
    CONTACT_US: `/contactUs`,
    CATEGORY: `/category`,
    PAYMENT: `/payment`,
    CONFIRM_EMAIL: `/accounts/confirm/email`,
    BASE_ROUTE: "/",
  };
};
export default webRoute;
