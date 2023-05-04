import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ClientMeetingManagementComponent } from './client-meeting-management/client-meeting-management.component';

const routes: Routes = [
  {path:"register", component:ClientManagementComponent },
  {path:"scheduleMeeting", component:ClientMeetingManagementComponent },
  {path:"home", component:ClientManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
