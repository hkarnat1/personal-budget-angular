import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any
  constructor(private http: HttpClient) { }
  getChartData(){
    if (this.data) {
      return of(this.data)
    }
    return this.http.get('http://localhost:3000/budget').pipe(
      tap(result=> {
        this.data = result;
      }),
    );

  }

}
