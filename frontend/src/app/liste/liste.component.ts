import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { IframeComponent } from '../iframe/iframe.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() channel : any;
  gStyle : boolean = false;
  nom : string;
  constructor(private frame : IframeComponent) { }

  ngOnInit(): void {
  } 


  onChangeState(name) {
    this.gStyle = true;
    localStorage.selected = name;
    this.frame.onReload();
  }
}
