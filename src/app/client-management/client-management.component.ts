import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {

  client_data = {
    username: "",
    phone: "",
    email:"",
    address:"",
    city:"",
    pin:""
  }
  submitted = false;
  form_validate(form: NgForm){
    this.submitted = true;
    this.client_data.username = form.value.cname;
    this.client_data.phone = form.value.phone;
    this.client_data.email = form.value.cemail;
    this.client_data.address = form.value.address;
    this.client_data.city = form.value.city;
    this.client_data.pin = form.value.pin;

    form.reset();
    
}

}