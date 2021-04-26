import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ChannelService } from '../services/channel.service';
import { ListeComponent } from '../liste/liste.component';
import { Channel } from '../model/channel.model';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})

export class IframeComponent implements OnInit {
  tabChannel : any;
  id : string = 'https://www.youtube.com/embed/EeCn9FN94RU';
  videoUrl : SafeResourceUrl;
  stream : ListeComponent;
  
  constructor(private channel : ChannelService, private sanitaizer : DomSanitizer) { 
  }

  ngOnInit(): void {
    this.tabChannel = this.channel.tabChannel;
  }

  /*getChannel() {
    console.log(this.tabChannel + " ??");
    for(let i=0; i<this.tabChannel.length; i++) {
      for(let j=0; j<this.tabChannel[i].chan.length; j++) {
        if(this.tabChannel[i].chan[j].nameChannel == localStorage.selected) {
          return this.tabChannel[i].chan[j];
        }
     }
    }
  }*/

  affiche = this.channel.getChannel();

  getEmbedUrl() {
    return this.sanitaizer.bypassSecurityTrustResourceUrl(this.affiche.link);
  }

  onReload() {
    window.location.reload();
  }
}
