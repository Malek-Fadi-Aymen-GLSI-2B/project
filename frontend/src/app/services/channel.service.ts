import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Chan } from '../model/chan.model';
import { Channel } from '../model/channel.model';



export class ChannelService {
    channel : Chan;
    tabChannel : Channel[] =  [
      {
        nameCountry: 'Tunisian channels',
        chan :  [{
          id: 1,
          nameChannel: 'Watania 1',
          link: 'https://www.youtube.com/embed/P9h2JyU0Rog',
          type: 'Entertaiment',
          description: "Wataniya 1, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        },
        {
          id: 2,
          nameChannel: 'Watania 2',
          link: 'https://www.youtube.com/embed/HSIYe44RIuM',
          type: 'News',
          description: "Wataniya 2, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        }
        ]
      },
      {
        nameCountry: 'Algerian channels',
        chan: [ {
          id: 3,
          nameChannel: 'ElhiwarEttoun',
          link: 'https://www.youtube.com/embed/EeCn9FN94RU',
          type: 'News',
          description: "Wataniya 1, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        }]
      },
      {
        nameCountry: 'Saudian channels',
        chan: [ {
          id: 4,
          nameChannel: 'Al arabiya',
          link: 'https://www.youtube.com/embed/OzGoAs6wuOA',
          type: 'News',
          description: "Arabiya tv, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        },
        {
          id: 5,
          nameChannel: 'Makkah tv',
          link: 'https://www.youtube.com/embed/SMNHZR1u6KQ',
          type: 'News',
          description: "Makkah tv, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        }]
      },
      {
        nameCountry: 'Frensh channels',
        chan: [ {
          id: 6,
          nameChannel: 'France 24',
          link: 'https://www.youtube.com/embed/bpCpyMViRyU',
          type: 'News',
          description: "France 24, then, is one of the two Tunisian television channels, and it is an inclusive public channel."
        }]
      }
    ];
    

    getCountryByName(name : string) : string{
      for(let count of this.tabChannel) {
        for(let channel of count.chan) {
          if(channel.nameChannel == name) {
            return count.nameCountry;
          }
        }
      }
    }

    getChannel() {
      for(let count of this.tabChannel) {
        for(let channel of count.chan) {
          if(channel.nameChannel == localStorage.selected) {
            return channel;
        }
      }  
    } 
  }

    deleteChannel(name : string) {
      for(let i = 0; i < this.tabChannel.length; i++) {
        for(let j = 0; j < this.tabChannel[i].chan.length; j++) {
          if(this.tabChannel[i].chan[j].nameChannel == name) {
            if(j > -1 ) {
              this.tabChannel[i].chan.splice(j, 1);
            }
          }
        }
      }
      this.refresh();
      console.log(name + " supprime");
    }
    
    refresh() : void {
      for(let i = 0; i < this.tabChannel.length; i++) {
        if(this.tabChannel[i].chan.length < 1){
          this.tabChannel.splice(i,1);
        }
      }
    }

    addChannel(chann : Chan, country : string) {
      for(let count of this.tabChannel) {
        if(count.nameCountry == country) {
          count.chan.push(chann);
        } else {
          this.tabChannel.push({nameCountry : country, chan : [chann]});
          break;
        }
      }
    }

    consultingChannel(name : string) {
      for(let count of this.tabChannel) {
        for(let channel of count.chan) {
          if(channel.nameChannel == name){
            return channel;
          }
        }
      }
    }

    updateChannel(c : Chan, country : string) {
      this.deleteChannel(c.nameChannel);
      this.addChannel(c, country)
    }
}