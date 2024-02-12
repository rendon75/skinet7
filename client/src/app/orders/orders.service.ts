import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderItem } from '../shared/models/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }
}
