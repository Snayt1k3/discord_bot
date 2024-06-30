import { config } from 'dotenv';

config({ path: '.env'});

export const DISCORD_TOKEN = process.env.DISCORD_TOKEN as string;
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID as string;

