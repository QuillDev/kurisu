import {Client, ClientOptions} from "discord.js";
import {readdir, readFile} from "fs/promises";
import {join} from 'path';
import {Middleware} from "../components/Middleware";

export class Kurisu extends Client {
    constructor(
        private clientOptions: ClientOptions = {intents: []},
    ) {
        super(clientOptions);
    }

    loadMiddlewares = async () => {
        const parent = join(__dirname, '..', 'middlewares');
        const files = await readdir(parent);

        // iterate through all the files in the files
        files.forEach((file) =>
            // import this file
            import(join(parent, file)).then((module) => {
                // try to create middlewares for all the keys
                Object.keys(module).forEach((key) => {
                    const middleware: Middleware = new module[key]();
                    middleware.process(this);
                })
            })
        );
    }

    override login = async (token?: string): Promise<string> => {
        await this.loadMiddlewares();
        return super.login(token);
    }
}