import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetuserlistService {
  public _showUserList = new BehaviorSubject<Object>({});
  showUserList$ = this._showUserList.asObservable();
  public _searchByName = new BehaviorSubject<String>("");
  searchByName$ = this._searchByName.asObservable();
  public _onClickOfUserName = new BehaviorSubject<String>("");
  onClickOfUserName$ = this._onClickOfUserName.asObservable();
  constructor(public http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe( (resp) => {
      this._showUserList.next(resp);
    },
    (err) => {
      console.log(err);
    });
   }

  
}
