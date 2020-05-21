import { Component, OnInit } from '@angular/core';
import { MyAccountService } from '../my-account.service';
import { UserInfo, IUserInfo } from '../product';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor( private myAccountService: MyAccountService) { }

  userInfo:UserInfo;

  ngOnInit(): void {

    this.myAccountService.getAccountInfo().subscribe(
      (res)=>{
        this.userInfo=res;
        console.log ("Got userinfo", this.userInfo)
      }
    );
  }



}
