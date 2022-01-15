import React from "react"
// import { FormattedMessage } from "react-intl"
import routes from "../../string/routes"
import HomeIcon from "../../../components/ui/icons/HomeIcon"
import UserIcon from "../../../components/ui/icons/UserIcon"
import CartIcon from "../../../components/ui/icons/CartIcon"
import HeartIcon from "../../../components/ui/icons/HeartIcon"
// import messages from "./messages"

const userIsLoagin = (cartLength, wishlistLength) => [
  {
    icon: <HomeIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.home} />",
    href: routes.webRoute().HOME
  },

  {
    icon: <UserIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.account} />",
    href: routes.webRoute().PROFILE
  },
  {
    icon: <CartIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.cart} />",
    href: routes.webRoute().CART,
    number: cartLength
  },
  {
    icon: <HeartIcon height="18px" width="18px" />,
    title: "<FormattedMessage {...messages.wishlist} />",
    href: `${routes.webRoute().CART}#wishlist`,
    number: wishlistLength
  }
]
export default userIsLoagin
