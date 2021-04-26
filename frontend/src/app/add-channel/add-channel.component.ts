import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chan } from '../model/chan.model';
import { ChannelService } from '../services/channel.service';


@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {

  newChannel = new Chan();
  country : string;

  constructor(private channel : ChannelService, private route : Router) { }

  ngOnInit(): void {
  }

  onAddChannel() {
    this.channel.addChannel(this.newChannel, this.country);
    this.route.navigate(["/"]);
  }
}
