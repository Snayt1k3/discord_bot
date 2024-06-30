import { Client, GatewayIntentBits } from 'discord.js';


// Create a new client instance
export const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

