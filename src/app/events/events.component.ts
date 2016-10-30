import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Array<any>;
  allEvents: Array<any>;
  filteredEvents: Array<any>;
  filterDay: string = '';
  public status: { isopen: boolean } = { isopen: false };

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        name: 'Mash Mondays',
        venue: 'El Taller',
        address: '275 Essex St',
        location: 'Lawrence, MA',
        zip: '01840',
        day: 'Monday',
        start: '6pm',
        end: '9pm',
        fee: 5,
        games: 'Street Fighter 5, Guilty Gear',
        recurrence: 'Bi-Weekly',
        comments: null,
        image: '../../assets/El-Taller.jpg'
      },
      {
        name: 'Platinum City Gaming',
        venue: 'Platinum City Gaming',
        address: '3 W Water St',
        location: 'Taunton, MA',
        zip: '02780',
        day: 'Tuesday',
        start: '6pm',
        end: '10pm',
        fee: 5,
        games: 'Street Fighter 5 and more!',
        recurrence: 'Weekly',
        comments: null,
        image: './../../assets/PCG.jpg'
      },
      {
        name: 'Fighters on the Hill (NUFGC)',
        venue: 'Church on the Hill',
        address: '140 Bowdoin St',
        location: 'Boston, MA',
        zip: '02108',
        day: 'Thursday',
        start: '6pm',
        end: '11pm',
        fee: 5,
        games: 'Street Fighter 5, Marvel',
        recurrence: 'Weekly',
        comments: null,
        image: './../../assets/NUFGC.jpg'
      },
      {
        name: 'Fight Night',
        venue: 'Game Underground, Natick Mall',
        address: '1245 Worcester St #1094',
        location: 'Natick, MA',
        zip: '01760',
        day: 'Friday',
        start: '6pm',
        end: '12am',
        fee: 5,
        games: 'Street Fighter 5 and more!',
        recurrence: 'Weekly',
        comments: null,
        image: './../../assets/GUTS.PNG'
      },
      // {
      //   name: 'Fenway Fight Night',
      //   venue: 'International Village, Rooms 14 - 18',
      //   address: '1155-1175 Tremont St',
      //   location: 'Boston, MA',
      //   zip: '02120',
      //   day: 'October 15, 2016',
      //   start: '1pm',
      //   end: '11pm',
      //   fee: 0,
      //   games: 'Street Fighter 5, Marvel',
      //   recurrence: 'Weekly',
      //   comments: ['BlazBlue CF @ 3PM - $3 entry fee',
      //   'Food break and Casuals on stream @ ~5PM',
      //   'KoF XIV @ ~6PM - $3 entry fee',
      //   'Guilty Gear XrdR @ ~8PM - $3 entry fee']
      // }
    ];

    this.allEvents = this.events;
  }

  filterByDay(day: string) {
    this.filterDay = day;
    if (day !== '') {
      this.filteredEvents = this.allEvents.filter((obj) => {
        if (obj.day === day || day === '') {
          return true;
        }});
      this.events = this.filteredEvents;
    } else {
      this.events = this.allEvents;
    }
  }
}
