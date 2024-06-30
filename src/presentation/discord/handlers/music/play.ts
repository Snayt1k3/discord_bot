import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("play")
  .setDescription("Play a song");

export async function execute(interaction: CommandInteraction) {
    await interaction.reply('song: NewJeans - Right Now');
}
