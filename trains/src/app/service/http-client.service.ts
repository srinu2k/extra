import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

export class Trains {
  constructor(
    public  train_id: number,
    public  train_name: String,
    public  from: String,
    public  to: String,
    public  fare: number,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService{
  [x: string]: any;
  constructor(private http: HttpClient) { }

  getTrains(){
      return this.http.get<Trains[]>('/Admin/Trains');
  }
  saveResto(data: any)
  {
     return this.http.post<Trains[]>('/Admin/Trains',data)
  }
  deleteResto(id: any)
  {
    return this.http.delete<Trains[]>(`${'/Admin/Trains'}/${id}`)
  }
  getCurrentResto(id: any)
  {
    return this.http.get<Trains[]>(`${'/Admin/Trains'}/${id}`)
  }
  updateResto(id: any,data: any)
  {
    return this.http.put<Trains[]>(`${'/Admin/Trains'}/${id}`,data)
  }
}