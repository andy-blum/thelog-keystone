import { list } from '@keystone-next/keystone';
import {
  relationship,
  integer,
  checkbox,
} from '@keystone-next/keystone/fields';

export const Bid = list({
  fields: {
    team: relationship({
      ref: 'Team',
    }),
    player: relationship({
      ref: 'Player',
    }),
    salary: integer({
      validation: {
        isRequired: true,
        min: 100,
        max: 10000,
      },
    }),
    years: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 100,
      },
    }),
    is_dts: checkbox(),
  },
});
