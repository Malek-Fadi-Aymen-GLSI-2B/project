import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chan } from '../model/chan.model';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  currentChannel = new Chan();
  country : string;

  constructor(private activatedRoute : ActivatedRoute, private channel : ChannelService, private route : Router) { }

  ngOnInit(): void {
    this.currentChannel = this.channel.consultingChannel(this.activatedRoute.snapshot.params.nameChannel);
    this.country = this.channel.getCountryByName(this.currentChannel.nameChannel);
  }

  onUpdateChannel() {
    this.channel.updateChannel(this.currentChannel, this.country);
    this.route.navigate(["/"]);
  }

}
