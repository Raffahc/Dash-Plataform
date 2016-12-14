import { Component, OnInit } from '@angular/core';

import { Staff } from '../../model/staff/staff-model';
import { StaffDataAccessService } from '../../model/staff/staff-data-access.service';

@Component({
  selector: 'staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  providers: [StaffDataAccessService]
})
export class StaffComponent implements OnInit {
  constructor(
    private staffDataAccess: StaffDataAccessService
  ) { }

  staff: Staff = new Staff();
  staffList: Array<Staff>;

  ngOnInit() {
    this.loadStaff();
  }

  private isValid(staff: Staff): Boolean {
    let isValid = true;

    if (!staff.name) {
      return false;
    }

    else if (!staff.email) {
      return false
    }
    else if (!staff.pass) {
      return false
    }

    return isValid;
  }

  private clearModel() {
    this.staff = new Staff();
  }

  private loadStaff(): void {
    this.staffDataAccess.getStaffList()
      .then(response => {
        this.staffList = response;
      });
  }

  onSave(): void {
    if (this.isValid(this.staff)) {
      this.staffDataAccess.postStaff(this.staff)
        .then(response => {
          this.clearModel();
          this.loadStaff();
        });
    }
  }
}
