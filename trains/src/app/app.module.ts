import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { AddtrainsComponent } from './addtrains/addtrains.component';
import { UpdatetrainsComponent } from './updatetrains/updatetrains.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientService } from './service/http-client.service';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserComponent } from './user/user.component';
import { PnrComponent } from './pnr/pnr.component';
import { TraindataComponent } from './traindata/traindata.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    AddtrainsComponent,
    UpdatetrainsComponent,
    HomeComponent,
    ReservationComponent,
    DetailsComponent,
    AdminComponent,
    ContactComponent,
    LoginComponent,
    UserloginComponent,
    RegisteruserComponent,
    UserComponent,
    PnrComponent,
    TraindataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

