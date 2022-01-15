/*
 * Footer Messages
 *
 * This contains all the text for the Header Top Bar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'global';

export default defineMessages({
  order: {
    id: `${scope}.order`,
    defaultMessage: 'order',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
  addresses: {
    id: `${scope}.addresses`,
    defaultMessage: 'addresses',
  },
});
