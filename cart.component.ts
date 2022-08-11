import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dateBuy: any;
  billingCheckbox: boolean = false;
  
  formGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z_.][a-zA-Z0-9]{0,10}@[a-z0-9]{4,10}\.[a-z]{2,5}$')
    ]),
    password: new FormControl('', [
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0][1-9]{9}$'),
    ]),
    cart: new FormControl([]),
  })
  constructor() { }

  ngOnInit(): void {
    document.documentElement.scrollTop = 0;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
    let year = date.getFullYear();
    this.dateBuy = `${day}/${month}/${year}`;
  }
  get form(): any {
    return this.formGroup.controls;
  }
  checkBilling() {
    if (this.billingCheckbox) {
      this.billingCheckbox = false;
    } else {
      this.billingCheckbox = true;
    }
  }
}
