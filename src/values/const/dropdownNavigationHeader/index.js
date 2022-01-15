/*eslint-disable */
import React from 'react';
import OrderIcon from 'components/ui/icons/OrderIcon';
import AddressIcon from 'components/ui/icons/AddressIcon';
import UserIcon from 'components/ui/icons/UserIcon';

import routes from '../../string/routes';
const dropdownNavigationHeader = ({ t }) => [
  {
    icon: <OrderIcon height="18px" width="18px" />,
    title: (t('profile.sidebar.my-order')
    ),
    href: routes.profileRoute().MY_ORDER,
  },
  {
    icon: <AddressIcon height="18px" width="18px" />,
    title: (t('profile.sidebar.my-addresses')
    ),
    href: routes.profileRoute().MY_ADDRESSES,
  },

  {
    icon: <UserIcon height="18px" width="18px" />,
    title: (t('profile.sidebar.my-account')
    ),
    href: routes.profileRoute().MY_USER_INFORMATION,
  },
];
export default dropdownNavigationHeader;
