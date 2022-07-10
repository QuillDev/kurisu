import {Kurisu} from "../client/Kurisu";

export abstract class Middleware {
    abstract process(client: Kurisu): void;
}