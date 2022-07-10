import {Middleware} from "../components/Middleware";
import {Kurisu} from "../client/Kurisu";

export class OnReady extends Middleware {
    process(client: Kurisu) {
        client.on('ready', () => {
            const { user } = client;
            if(!user) return;
            console.info(`Ready! Logged in as ${user.username}${user.tag}`);
        });
    }
}