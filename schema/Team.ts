import { list } from '@keystone-next/keystone';
import {
  text,
  relationship,
  integer,
  float,
} from '@keystone-next/keystone/fields';

export const Team = list({
  fields: {
    espn_id: integer({
      validation: {
        isRequired: true,
      },
      isIndexed: 'unique',
    }),
    name: text(),
    logo: text(),
    abbreviation: text(),
    projectedRank: integer(),
    playoffSeed: integer(),
    wins: integer(),
    losses: integer(),
    ties: integer(),
    pointsFor: float(),
    pointsAgainst: float(),
    percentage: float(),
    gamesBack: float(),
    streakLength: integer(),
    streakType: text(),
    totalSalary: integer(),
    totalYears: integer(),
    totalActiveContracts: integer(),
    totalDTSContracts: integer(),
    totalIRContracts: integer(),
    totalWaivedContracts: integer(),
    owner: relationship({
      ref: 'User.team',
    }),
    contracts: relationship({
      ref: 'Contract.team',
      many: true,
    }),
  },
});
