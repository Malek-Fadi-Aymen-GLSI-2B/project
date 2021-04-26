import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authStatus : boolean;
  adminStatus : boolean;
  
  constructor(public auth : AuthService, private route : Router) { }

  ngOnInit(): void {
    this.authStatus = JSON.parse(localStorage.getItem("connect"));
  }

  signOut() {
    this.auth.signOut();
    this.route.navigate(["/auth"]);
    localStorage.setItem("connect", String(false)); 
  }

  onIsAdmin() {
    return this.auth.isAdmin()
  }

}
