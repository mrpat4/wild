/*
 * Footer Messages
 *
 * This contains all the text for the Header Top Bar component.
 */
import { defineMessages } from "react-intl"

export const scope = "Header.menuBar"
export const global = "global"

export default defineMessages({
  wishlist: {
    id: `Header.navigation.wishlist`,
    defaultMessage: "All Categories"
  },
  cart: {
    id: `cart.main.headline`,
    defaultMessage: "cart"
  },
  account: {
    id: `profile.sidebar.headline`,
    defaultMessage: "My Account"
  },
  home: {
    id: `${global}.home`,
    defaultMessage: "home"
  },
  signUp: {
    id: `${global}.signUp`,
    defaultMessage: "Sign Up"
  },
  signIn: {
    id: `${global}.signIn`,
    defaultMessage: "Sign In"
  }
})
