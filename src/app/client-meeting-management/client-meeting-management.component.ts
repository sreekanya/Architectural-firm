import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-meeting-management',
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})
export class ClientMeetingManagementComponent implements OnInit{
  //@ViewChild('f')schedule! :NgForm;

  schedule_form!: FormGroup;

  ngOnInit(): void {
      this.schedule_form = new FormGroup({
        'cname' : new FormControl("",[Validators.required,Validators.pattern('[a-zA-z]*')]),
        'dnt' : new FormControl(null,Validators.required)
      })
  }

  onSchedule(){
    console.log(this.schedule_form);
    
  }

}
