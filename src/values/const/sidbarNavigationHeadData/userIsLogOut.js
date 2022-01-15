import React from "react"
// import { FormattedMessage } from "react-intl"
import routes from "../../string/routes"
import HomeIcon from "../../../components/ui/icons/HomeIcon"
import UserIcon from "../../../components/ui/icons/UserIcon"
import CartIcon from "../../../components/ui/icons/CartIcon"
import SingnInIcon from "../../../components/ui/icons/SingnInIcon"

// import messages from "./messages"
const userIsLoagOut = cartLength => [
  {
    icon: <HomeIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.home} />",
    href: routes.webRoute().HOME
  },
  {
    icon: <SingnInIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.signIn} />",
    href: routes.webRoute().SINGING
  },
  {
    icon: <UserIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.signUp} />",
    href: routes.webRoute().SIGNUP
  },
  {
    icon: <CartIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.cart} />",
    href: routes.webRoute().CART,
    number: cartLength
  }
]
export default userIsLoagOut
