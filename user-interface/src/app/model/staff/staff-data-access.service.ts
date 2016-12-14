import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Staff } from './staff-model';
import { DataAccess } from '../data-access/data-access';

const url = "staff";

@Injectable()
export class StaffDataAccessService extends DataAccess {
    constructor(private http: Http) {
        super(url);
    }

    postStaff(staff: Staff): Promise<Staff> {
        return this.http
            .post(this.getUrl(), staff, this.getJsonHeader())
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleRequestError);
    }

    getStaffList(): Promise<Array<Staff>> {
        return this.http
            .get(this.getUrl(), this.getJsonHeader())
            .toPromise()
            .then(response => response.json())
            .catch(this.handleRequestError);
    }
}