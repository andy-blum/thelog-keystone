import 'dotenv/config';
import { config } from '@keystone-next/keystone';
import { createAuth } from '@keystone-next/auth';
import { statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schema/User';
import { Contract } from './schema/Contract';
import { Player } from './schema/Player';
import { Team } from './schema/Team';
import { Bid } from './schema/Bid';
import { DraftPick } from './schema/DraftPick';

const sessionSecret = process.env.COOKIE_SECRET;
const dbURL = process.env.DATABASE_URL;

if (!sessionSecret) {
  throw new Error(
    'The SESSION_SECRET environment variable must be set in production'
  );
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'id name roles team { id }',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: dbURL!,
    },
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      User,
      Contract,
      Player,
      Team,
      Bid,
      DraftPick,
    },
    session: statelessSessions({
      maxAge: 60 * 60 * 24 * 30,
      secret: sessionSecret,
    }),
    server: {
      cors: {
        origin: ['http://localhost:7777', 'https://thelog-next.vercel.app'],
        credentials: true,
      },
    },
  })
);
