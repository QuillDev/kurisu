import {Middleware} from "../components/Middleware";
import {Kurisu} from "../client/Kurisu";
import {ActivityTypes} from "discord.js/typings/enums";

export class UpdateStatus extends Middleware {
    process(client: Kurisu) {
        client.on('ready', () => {
            const {user} = client;
            if(!user) return;

            user.presence.set({
                status: 'online',
                activities: [{name: "Entering the Gate", type: ActivityTypes.LISTENING}]
            })

            console.info("Updated client status.")
        });
    }
}