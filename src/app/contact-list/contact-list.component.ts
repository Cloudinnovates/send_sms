import { Component, OnInit } from '@angular/core';
import { TwilioService } from '../services/twilio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public ContactList = [
    {
      id: 1,
      firstName: 'Chitra',
      lastName: 'Singh',
      contact: '+918619328270',
      count: 0
    },
    {
      id: 2,
      firstName: 'Vishnu',
      lastName: 'Singh',
      contact: '+917611898897',
      count: 0
    },
    {
      id: 3,
      firstName: 'Shiwangi',
      lastName: 'Singh',
      contact: '+917791892414',
      count: 0
    },
    {
      id: 4,
      firstName: 'Vijay',
      lastName: 'Singh',
      contact: '+919876543210',
      count: 0
    },
    {
      id: 5,
      firstName: 'Sunita',
      lastName: 'Singh',
      contact: '+919314660132',
      count: 0
    }
  ];

  constructor(public twilioService: TwilioService, private router: Router) { }

  ngOnInit() {
  }

  public sendMessage(contact): void {
    this.router.navigate(['/ContactList/SendMessage'], { queryParams: { contact: contact.contact } });
  }

  public contactDetail(contact): void {
    this.router.navigate(['/ContactList/detail'], { queryParams: { id: contact.id } });
  }

}

