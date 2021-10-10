import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientService } from '../service/http-client.service';

import { TrainComponent } from './train.component';

describe('TrainComponent', () => {
  let component: TrainComponent;
  let fixture: ComponentFixture<TrainComponent>;

  beforeEach(async (async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainComponent ]
      ,providers:[
        {provide:HttpClientService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should have one user', async(() => {
    expect(component.trains.length).toEqual(1);
  }));*/
});
