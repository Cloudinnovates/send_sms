import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {

  public id: number;
  private subscriptions: Subscription[] = [];
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

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscriptions.push(
      this.activatedRoute.queryParamMap.subscribe((query) => {
        this.id = parseInt(query.get('id'), 10) - 1;
        console.log(this.id);
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      // unsubscribe to all subscriptions to avoid memory leak
      subscription.unsubscribe();
    });
  }

}
