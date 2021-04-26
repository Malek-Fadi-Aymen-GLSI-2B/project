import { Component, OnInit, Input } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  tabNameChannel : string[];
  @Input() nCount : any;
  public isCollapsed = true;
  constructor(private service : ChannelService) {
   }

  ngOnInit(): void {
  }

} 
