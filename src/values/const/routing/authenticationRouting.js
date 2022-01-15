/*eslint-disable */
import SigninPage from 'containers/SigninPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import ShippingPage from 'containers/ShippingPage/Loadable';
import ForgetPassword from 'containers/ForgetPassword/Loadable';
import WebScreen from 'containers/App/WebScreen';
import routes from '../../string/routes';
import PaymentStatus from 'containers/PaymentStatus';
import ResetPassword from 'containers/ResetPassword/Loadable';
import ConfirmEmail from 'containers/ConfirmEmail';

const authenticationRouting = () => [
  { path: routes.webRoute().SINGING, component: SigninPage },
  { path: routes.webRoute().SIGNUP, component: SignupPage },
  { path: routes.webRoute().SHIPPING, component: ShippingPage },
  { path: routes.webRoute().PAYMENT, component: PaymentStatus, exact: true, },
  { path: routes.webRoute().FORGET_PASSWORD, component: ForgetPassword },
  { path: routes.webRoute().RESET_PASSWORD + "/:resetToken", component: ResetPassword },
  { path: routes.webRoute().CONFIRM_EMAIL, component: ConfirmEmail },
  { path: '*', component: WebScreen },
];

export default authenticationRouting;
