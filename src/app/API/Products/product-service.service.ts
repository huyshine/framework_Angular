import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getDetail(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteUser(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`);
  }



}
