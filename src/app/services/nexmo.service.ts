import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NexmoService {

  private readonly api_key = '';
  private readonly api_secret = '';
  private readonly senderNumber = '+12565983279';

  constructor(private httpClient: HttpClient) { }

  send(to: number, message: string) {
    this.httpClient.post(`https://rest.nexmo.com/sms/json?api_key=${this.api_key}&api_secret=${this.api_secret}`, {
      from: this.senderNumber,
      to: to.toString,
      text: message
    }).toPromise().then((response) => {
      console.log(response);
    }).catch((err) => {
      console.error(err);
    });
  }

  sendOTP(to: number) {
    // TODO: generate random 6 digits
    this.send(to, 'otp');
  }
}
