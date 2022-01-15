import ProfileOrders from 'components/Profile/ProfileOrders';
import ProfileReviews from 'components/Profile/ProfileReviews';
import ProfileCoupons from 'components/Profile/ProfileCoupons';
import ProfileInfo from 'components/Profile/ProfileInfo';
import ProfileAddresses from 'components/Profile/ProfileAddresses';
import ProfileCards from 'components/Profile/ProfileCards';
import ProfileNotifications from 'components/Profile/ProfileNotifications';
import routes from '../../string/routes';

const profileRouting = () => [
  {
    path: routes.profileRoute().MY_ORDER,
    component: ProfileOrders,
    exact: true,
  },
  // {
  //   path: routes.profileRoute().MY_REVIEW,
  //   component: ProfileReviews,
  //   exact: true,
  // },
  // {
  //   path: routes.profileRoute().MY_DISCOUNT_COUPONS,
  //   component: ProfileCoupons,
  //   exact: true,
  // },
  {
    path: routes.profileRoute().MY_USER_INFORMATION,
    component: ProfileInfo,
    exact: true,
  },
  {
    path: routes.profileRoute().MY_ADDRESSES,
    component: ProfileAddresses,
    exact: true,
  },
  // {
  //   path: routes.profileRoute().REGISTERED_CREDIT_CARDS,
  //   component: ProfileCards,
  //   exact: true,
  // },
  {
    path: routes.profileRoute().MY_NOTIFICATIONS,
    component: ProfileNotifications,
    exact: true,
  },
  // {
  //   path: routes.webRoute().PROFILE, render: (props) => <Redirect {...props} to={routes.profileRoute().MY_ORDER} />, exact: true,
  //   // <Redirect {...props} to={routes.profileRoute().MY_ORDER} />
  // },
  // { path: routes.webRoute().SUPPORT, render: () => 'SUPPORT_PAGE' },
];
export default profileRouting;
