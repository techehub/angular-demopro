import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import  {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username :string;
  password :string;
  error : String;

  constructor( private authService:AuthServiceService, private router : Router) { }

  ngOnInit(): void {

  }

  submit(){

    this.authService.login(this.username, this.password).subscribe(

      result => this.router.navigate(['home']),
      err => this.error = 'Could not authenticate'

    )

  }

}
