import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMethods = [
    {'id':'0','name':'Phone'},
    {'id':'1','name':'Email'}
];

  submit(myForm){
    console.log(myForm);
  }
}
