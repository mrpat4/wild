/*eslint-disable */
import HomePage from 'containers/HomePage';
import ProductPage from 'containers/ProductPage';
import SearchPage from 'containers/SearchPage';
import Page from 'containers/Page';
import ProfilePage from 'containers/ProfilePage';
import ShoppingCartPage from 'containers/ShoppingCartPage';
import routes from 'string/routes';
import ContactUsPage from 'containers/ContactUsPage';
import ParentCategoryPage from 'containers/ParentCategoryPage';
// import PaymentStatus from 'containers/PaymentStatus';
// import PlaygroundContainer from 'containers/PlaygroundContainer';

const webRouting = () => [
  { path: routes.webRoute().HOME, component: HomePage, exact: true },
  { path: routes.webRoute().PRODUCT + '/:slug', component: ProductPage },
  { path: routes.webRoute().PROFILE, component: ProfilePage },
  { path: routes.webRoute().CART, component: ShoppingCartPage },
  { path: routes.webRoute().CONTACT_US, component: ContactUsPage },
  { path: routes.webRoute().CATEGORY + '/:category', component: ParentCategoryPage },
  { path: routes.webRoute().SLUG_PAGE + '/:slugPage', component: Page, exact: true, },
  // { path: routes.webRoute().PAYMENT, component: PaymentStatus, exact: true, },
  // { path: routes.webRoute().PLAYGROUND, component: PlaygroundContainer, exact: true, },
  { path: routes.webRoute().SEARCH, component: SearchPage },
];

export default webRouting;
