import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-sms',
  templateUrl: './sent-sms.component.html',
  styleUrls: ['./sent-sms.component.css']
})
export class SentSmsComponent implements OnInit {

  public ContactList = [
    {
      id: 1,
      firstName: 'Chitra',
      lastName: 'Singh',
      contact: '+918619328270',
      count: 0,
      message: 'Your OTP is ******'
    },
    {
      id: 2,
      firstName: 'Vishnu',
      lastName: 'Singh',
      contact: '+917611898897',
      count: 0,
      message: 'Your OTP is ******'
    },
    {
      id: 3,
      firstName: 'Shiwangi',
      lastName: 'Singh',
      contact: '+917791892414',
      count: 0,
      message: 'Your OTP is ******'
    },
    {
      id: 4,
      firstName: 'Vijay',
      lastName: 'Singh',
      contact: '+919876543210',
      count: 0,
      message: 'Your OTP is ******'
    },
    {
      id: 5,
      firstName: 'Sunita',
      lastName: 'Singh',
      contact: '+919314660132',
      count: 0,
      message: 'Your OTP is ******'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
