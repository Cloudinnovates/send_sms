import { Injectable } from '@angular/core';
// import * as twilio from 'twilio';

@Injectable()
export class TwilioService {

  private readonly accountSid = 'AC0afeae6d0fa9e60f94783e2d407b293b';
  private readonly authToken = '032051423b075112a42a3326d4534ee6';
  private readonly accountNumber = '+12565983279';

  constructor() { }

  send(to: number, message: string) {

    // require the Twilio module and create a REST client
    // const client = twilio(this.accountSid, this.authToken);

    // client.messages.create({
    //     to: to,
    //     body: message,
    //     from: this.accountNumber,
    //   })
    // .then((response) => console.log(response))
    // .catch((err) => {
    //   console.error(err);
    // });
  }

  sendOTP(to: number) {
    // TODO: generate random 6 digits
    this.send(to, 'otp');
  }

}
