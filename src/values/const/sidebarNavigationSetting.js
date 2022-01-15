import React from 'react';
import FlagIcon from '../../components/ui/icons/FlagIcon';
import SubjectIcon from '../../components/ui/icons/SubjectIcon';
import WhatsappIcon from '../../components/ui/icons/WhatsappIcon';
import QuestionIcon from '../../components/ui/icons/QuestionIcon';
import PhoneIcon from '../../components/ui/icons/PhoneIcon';

const sidebarNavigationSetting = (currencyData, languageData) => [
  {
    icon: <FlagIcon height="12px" width="12px" />,
    label: 'currency',
    option: currencyData || [],
    click: 'showModal',
    href: '',
  },
  {
    icon: <SubjectIcon height="12px" width="12px" />,
    label: 'language',
    option: languageData || [],
    click: 'changeLanguage',
    href: '',
  },
  {
    icon: <WhatsappIcon height="12px" width="12px" />,
    label: 'WhatsApp Us',
    href: '#',
  },
  // {
  //   icon: <QuestionIcon height="12px" width="12px" />,
  //   label: 'Help',
  //   href: '#',
  // },
  {
    icon: <PhoneIcon height="12px" width="12px" />,
    label: 'Contact Us',
    href: 'tel:+905533797033',
  },
];
// mailto:someone@example.com?Subject=Hello%20again

export default sidebarNavigationSetting;
