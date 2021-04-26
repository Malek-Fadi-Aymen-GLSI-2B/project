import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus : boolean;
  user = new User();
  error : number = 0;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn(this.user);

    if(this.authStatus = this.authService.isAuth) {
    this.router.navigate(["/"])
    localStorage.setItem("connect", String(true));
    } else {
      this.error = 1;
    }
      
    
  }
}
