import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink, DrinkQueryParams, DrinkResponse } from '../models/drink.model';

@Injectable({ providedIn: 'root' })
export class DrinksService {
  private readonly baseUrl = 'http://localhost:4000/api';

  constructor(private readonly http: HttpClient) {}

  getDrinks(query?: DrinkQueryParams): Observable<DrinkResponse> {
    let params = new HttpParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params = params.set(key, String(value));
        }
      });
    }
    return this.http.get<DrinkResponse>(`${this.baseUrl}/drinks`, { params });
  }

  getDrink(id: number): Observable<Drink> {
    return this.http.get<Drink>(`${this.baseUrl}/drinks/${id}`);
  }

  createDrink(drink: Partial<Drink>): Observable<Drink> {
    return this.http.post<Drink>(`${this.baseUrl}/drinks`, drink);
  }

  updateDrink(id: number, drink: Partial<Drink>): Observable<Drink> {
    return this.http.put<Drink>(`${this.baseUrl}/drinks/${id}`, drink);
  }

  deleteDrink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/drinks/${id}`);
  }
}
