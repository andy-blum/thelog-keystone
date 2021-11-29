import { list } from '@keystone-next/keystone';
import {
  text,
  password,
  relationship,
  select,
} from '@keystone-next/keystone/fields';

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    team: relationship({
      ref: 'Team.owner',
    }),
    roles: select({
      options: [{ label: 'Commissioner', value: 'commmissioner' }],
    }),
  },
});
