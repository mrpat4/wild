import { defineMessages } from 'react-intl';

export const scope = 'Order.steps';

export default defineMessages({
  sending: {
    id: `${scope}.sending`,
    defaultMessage: 'Sending',
  },
  pay: {
    id: `${scope}.pay`,
    defaultMessage: 'Pay',
  },
  end: {
    id: `${scope}.end`,
    defaultMessage: 'End',
  },
});
