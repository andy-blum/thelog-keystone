import { list } from '@keystone-next/keystone';
import {
  integer,
  select,
  relationship,
  checkbox,
} from '@keystone-next/keystone/fields';

const isCommissioner = (session) =>
  Boolean(session.data.roles === 'commissioner');
const isOwner = (session, item) =>
  Boolean(session.data.team.id === item.teamId);

export const Contract = list({
  fields: {
    node_id: integer({
      validation: {
        isRequired: true,
      },
      isIndexed: 'unique',
    }),
    salary: integer({
      validation: {
        isRequired: true,
        min: 100,
        max: 100000,
      },
    }),
    years: integer({
      validation: {
        isRequired: true,
        min: 0,
        max: 100,
      },
    }),
    status: select({
      isIndexed: true,
      validation: {
        isRequired: true,
      },
      options: [
        { label: 'Active', value: 'active' },
        { label: 'DTS', value: 'dts' },
        { label: 'Waived', value: 'waived' },
        { label: 'Injured Reserve', value: 'ir' },
        { label: 'Restricted Free Agent', value: 'rfa' },
      ],
    }),
    team: relationship({
      ref: 'Team.contracts',
      many: false,
    }),
    player: relationship({
      ref: 'Player.contract',
    }),
    needsAttention: checkbox(),
    isFranchiseTagged: checkbox(),
  },
});
