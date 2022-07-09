import { Client } from 'discord.js';
import "dotenv/config";

const bot = new Client({intents: []});

( async () => {
    await bot.login(process.env.DISCORD_TOKEN);
})();
