import { client } from "presentation/discord/bot";
import { DISCORD_TOKEN } from "presentation/discord/common/config";
import { deployCommands } from "presentation/discord/handlers/commandHandler";
import { commands } from "presentation/discord/handlers/music";

client.once('ready', async () => {
  console.log('Ready!');
  await deployCommands({ guildId: "609869875053199366"});  // Временное решение, потом после всех правок убрать deploy commands
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

// Login to Discord with your app's token
client.login(DISCORD_TOKEN);