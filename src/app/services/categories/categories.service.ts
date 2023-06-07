import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'http://localhost:8080/api/categories'
  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }

  getOneCate(id: number | string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  creatCate(category: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, category);

  }

  updateCate(categoryId: any , newcategory : any): Observable<any> {
    console.log(`${this.apiUrl}/${categoryId._id}`);
    
    return this.http.put<any>(`${this.apiUrl}/${categoryId}`, newcategory);
  }

  removeCate(categoryId: number | string) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${categoryId}`);
  }

}
