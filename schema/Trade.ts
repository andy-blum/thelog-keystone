import { list } from '@keystone-next/keystone';
import {
  relationship,
  timestamp,
  checkbox,
} from '@keystone-next/keystone/fields';

export const Trade = list({
  fields: {
    teamOne: relationship({
      ref: 'Team',
      many: false,
    }),
    teamOneContracts: relationship({
      ref: 'Contract',
      many: true,
    }),
    teamOneDraftPicks: relationship({
      ref: 'DraftPick',
      many: true,
    }),
    teamOneApproves: checkbox(),
    teamTwo: relationship({
      ref: 'Team',
      many: false,
    }),
    teamTwoContracts: relationship({
      ref: 'Contract',
      many: true,
    }),
    teamTwoDraftPicks: relationship({
      ref: 'DraftPick',
      many: true,
    }),
    teamTwoApproves: checkbox(),
    teamsAgree: timestamp(),
    tradeFinalized: checkbox(),
  },
});
