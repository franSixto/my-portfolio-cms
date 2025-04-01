import dotenv from 'dotenv';
dotenv.config();

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'default_secret'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'default_salt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'default_transfer_salt'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
