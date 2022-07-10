import { Client } from 'discord.js';
import "dotenv/config";
import {Kurisu} from "./src/client/Kurisu";

const bot = new Client({intents: []});

( async () => {
    const {DISCORD_TOKEN, CLIENT_ID} = process.env;
    if(!DISCORD_TOKEN || !CLIENT_ID){
        throw "Invalid Configuration";
    }

    const kurisu = new Kurisu();
    await kurisu.login(DISCORD_TOKEN);

})();
