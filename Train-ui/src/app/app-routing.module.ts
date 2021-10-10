import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { TraindataComponent } from './traindata/traindata.component';

const routes: Routes = [
  {path:'schedule',component:TraindataComponent},
  {path:'reserve',component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
