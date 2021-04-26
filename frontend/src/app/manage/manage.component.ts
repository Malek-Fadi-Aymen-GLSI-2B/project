import { Component, OnInit } from '@angular/core';
import { Chan } from '../model/chan.model';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  tabChannel : any;
  constructor(private channel : ChannelService) { }

  ngOnInit(): void {
    this.tabChannel = this.channel.tabChannel;
  }

  onDeleteChannel(chan : Chan) {
    let conf=confirm("Are sure to delete " + chan.nameChannel + " ?");
    if(conf) {
      this.channel.deleteChannel(chan.nameChannel);
  
    }
  } 
  
}
