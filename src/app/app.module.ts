import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SentSmsComponent } from './sent-sms/sent-sms.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { HttpClientModule } from '@angular/common/http';

import { NexmoService } from './services/nexmo.service';
import { TwilioService } from './services/twilio.service';

const appRoutes: Routes = [
  {
    path: 'ContactList/SendMessage',
    component: MessageBoxComponent
  },
  {
    path: 'ContactList',
    component: ContactListComponent
  },
  {
    path: 'ContactList/detail',
    component: ContactDetailComponent
  },
  {
    path: 'SentMessages',
    component: SentSmsComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    SentSmsComponent,
    ContactDetailComponent,
    MessageBoxComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [
    TwilioService,
    NexmoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
