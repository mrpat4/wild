import routes from '../../string/routes';

const webRedirects = () => [
  { from: routes.webRedirect.PRODUCT },
  { from: routes.webRedirect.LIST },
  { from: routes.webRedirect.PROFILE },
  { from: routes.webRedirect.CART },
  { from: routes.webRedirect.HOME, exact: true },

  { from: routes.webRedirect.SLUG_PAGE },
];

export default webRedirects;
