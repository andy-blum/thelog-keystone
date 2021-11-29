import { list } from '@keystone-next/keystone';
import {
  text,
  relationship,
  integer,
  float,
  checkbox,
  json,
} from '@keystone-next/keystone/fields';

export const Player = list({
  fields: {
    espn_id: integer({
      isIndexed: 'unique',
      validation: {
        isRequired: true,
      },
    }),
    name: text({
      isIndexed: true,
      validation: {
        isRequired: true,
      },
    }),
    team: text(),
    position: text({
      isIndexed: true,
    }),
    positionWeight: integer(),
    isIrEligible: checkbox(),
    injuryStatus: text({
      isIndexed: true,
    }),
    positionRank: integer(),
    overallRank: integer(),
    seasonOutlook: text(),
    outlooksByWeek: json(),
    isRookie: checkbox(),
    fullStats: json(),
    pointsLastYear: float({
      isIndexed: true,
    }),
    pointsThisYear: float({
      isIndexed: true,
    }),
    pointsThisYearProj: float({
      isIndexed: true,
    }),
    pointsThisWeekProj: float({
      isIndexed: true,
    }),
    contract: relationship({
      ref: 'Contract.player',
    }),
  },
});
