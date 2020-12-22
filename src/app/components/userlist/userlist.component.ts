import { Component, OnInit } from '@angular/core';
import { GetuserlistService } from 'src/app/services/getuserlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
userList : any;
searchByName : String = '';
searchedOutput : Object;
  constructor(private userListService: GetuserlistService) {
    this.userListService.showUserList$.subscribe( (res)=> {
      if(Object.keys(res).length != 0) 
      this.userList = res;
    });
   }

  ngOnInit() {
    this.userListService.searchByName$.subscribe( (res) => {
      console.log(res);
      if(res != ""){
        this.searchByName = res;
        for(let i = 0 ; i < this.userList.length ; i++){
          if(this.userList[i]['name'] === this.searchByName){
            this.searchedOutput = this.userList[i];
          }
        }
      }
    })
  }
  showName(name: string){
   this.userListService._onClickOfUserName.next(name);
  }
}
