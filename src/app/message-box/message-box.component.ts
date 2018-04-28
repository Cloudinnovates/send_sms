import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NexmoService } from '../services/nexmo.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit, OnDestroy {

  public message: string;
  public contact: number;
  private subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private nexmo: NexmoService) {
    this.subscriptions.push(
      this.activatedRoute.queryParamMap.subscribe((query) => {
        this.contact = parseInt(query.get('contact'), 10);
      })
    );

    this.message = 'Hi, your OTP is: ' + Math.floor(100000 + Math.random() * 900000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      // unsubscribe to all subscriptions to avoid memory leak
      subscription.unsubscribe();
    });
  }

  // number validate

  public sendMessage(): void {
    this.nexmo.sendOTP(this.contact);
  }

}
