import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//   public dataSource: any = {
//     datasets: [
//         {
//             data: [],
//             backgroundColor: [
//                 '#ffcd56',
//                 '#ff6384',
//                 '#36a2eb',
//                 '#fd6b19',
//             ]
//         }
//     ],
//     labels: []
// };

  constructor(private http: HttpClient) { }
  getChartData(){
    return this.http.get('http://localhost:3000/budget');
  }

}
