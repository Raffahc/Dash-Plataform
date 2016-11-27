import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { RootComponent } from './root/root.component';

import { StaffComponent } from './sections/staff/staff.component';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    RootComponent,
    StaffComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: StaffComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: StaffComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
