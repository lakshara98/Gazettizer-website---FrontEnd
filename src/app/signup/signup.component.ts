import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  saveUser:any ={};

  constructor(private User: UserService) { }

  ngOnInit() {
  }

  saveUserDetails(signValue){
    this.User.signUp(signValue).subscribe(rslt => {
      this.saveUser = rslt;
      console.log(signValue)
      alert('You have successfully signed up');

    });

  }

}
