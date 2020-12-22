import { Component, OnInit } from '@angular/core';
import { GetuserlistService } from 'src/app/services/getuserlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name : string;
  toShowName : String = null;
  constructor(private searchUser: GetuserlistService) { }

  ngOnInit() {
    this.searchUser._onClickOfUserName.subscribe( (res) => {
      this.toShowName = res;
    })
  }
  search(){
    this.searchUser._searchByName.next(this.name);
  }
}
