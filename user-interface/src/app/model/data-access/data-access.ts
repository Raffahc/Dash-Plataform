import { Headers, Http } from '@angular/http';

export abstract class DataAccess {
    constructor(private url: String) { }

    readonly baseUrl = 'api/';

    getJsonHeader(): Object {
         let header = new Headers({ 'Content-Type': 'application/json' });
         let headerContainer = { headers: header };

         return header;
    }

    getUrl(): string {
        return this.baseUrl + this.url;
    }

    handleRequestError(error: any): Promise<any> {
        console.error('The Request have failed - ', error);
        
        return Promise.reject(error.message || error);
    }

}