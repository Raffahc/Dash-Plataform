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
  staff: Staff = new Staff();

  constructor(
    private staffDataAccess: StaffDataAccessService
  ) { }

  ngOnInit() { }

  private isValid(staff: Staff): Boolean {
    let isValid =  true;

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

  onSave(): void {
    if (this.isValid(this.staff)) {
      this.staffDataAccess.postStaff(this.staff)
        .then(response => {
          this.clearModel();
        });
    }
  }
}
