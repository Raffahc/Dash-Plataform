export abstract class Configuration {
    constructor(
        private db: string,
        private sessionSecret: string
    ) { }

    public getProperties(): Object {
        return {
            db: this.db,
            sessionSecret: this.sessionSecret
        };
    }
}