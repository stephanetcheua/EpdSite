import { Component, OnInit } from '@angular/core';
import {FormService} from "../services/form.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-region-contact-form',
  templateUrl: './region-contact-form.component.html',
  styleUrls: ['./region-contact-form.component.scss']
})
export class RegionContactFormComponent implements OnInit {
contactForm :FormGroup;
controls=['name','email','phone','message'];
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.contactForm= new FormGroup({
      name:new FormControl('',<any>Validators.required),
      email:new FormControl('',<any>Validators.required),
      phone:new FormControl('',<any>Validators.required),
      message:new FormControl('',<any>Validators.required),
    })
  }
  onSubmit(){
    this.contactForm.controls['name'].setValue("Stephane");
    this.contactForm.controls['phone'].setValue("Stephane");
    this.contactForm.controls['email'].setValue("Stephane");
    this.contactForm.controls['message'].setValue("Stephane");
    this.sendForm();
  }
  sendForm(){
    console.log(this.contactForm);
    this.formService.sendContactForm(this.contactForm);
    //this.contactForm.reset();
  }
}
