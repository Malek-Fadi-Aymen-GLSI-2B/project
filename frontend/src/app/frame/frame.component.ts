import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Input() affiche : any;
  authStatus : boolean;

  constructor(private sanitaizer : DomSanitizer, private auth : AuthService) { }

  ngOnInit(): void {
    this.authStatus = this.auth.isAuth;
  }

  getEmbedUrl() {
    return this.sanitaizer.bypassSecurityTrustResourceUrl(this.affiche.link);
  }

  
}
