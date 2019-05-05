import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginUser:any ={};

  constructor(private User: UserService) { }

  ngOnInit() {
  }

  loginDetails(loginValue){
    this.User.login(loginValue).subscribe(rslt => {
      this.loginUser = rslt;
      alert('You have successfully logged in');

    });

  }
}