import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8080/api/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  getProduct(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(productId: any, newProduct :any): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.put<any>(url, newProduct);
  }

  deleteProduct(id: string ): Observable<any> {
    // const url = `${this.apiUrl}/${id}`;
    console.log(`${this.apiUrl}/${id}`);
    
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
