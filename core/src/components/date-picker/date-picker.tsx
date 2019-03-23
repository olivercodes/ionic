import { Component, ComponentInterface, State } from '@stencil/core';
import { createFinalMonthView } from './date-picker-util'
// Element, Event, EventEmitter, Listen, Method, Prop, State, Watch } from '@stencil/core';
@Component({
  tag: 'ion-date-picker',
  styleUrls: {
    ios: 'date-picker.ios.scss',
    md: 'date-picker.md.scss'
  },
  shadow: true
})
export class DatePicker implements ComponentInterface {

  @State() _thisMonthView = createFinalMonthView(2019, 2);

  private month: number = 2;
  private year: number = 2019;

  prevMonth() {
    if (this.month == 0) {
      this.month = 11;
      this.year -= 1;
    } else {
      this.month -= 1;
    }
    this._thisMonthView = [...createFinalMonthView(this.year, this.month)];
  }
  
  nextMonth() {
    if (this.month == 11) {
      this.month = 0;
      this.year += 1;
    } else {
      this.month += 1;
    }

    this._thisMonthView = [...createFinalMonthView(this.year, this.month)];
    console.log(this._thisMonthView);
  }

  render() {
    return [
      <div class="calendar-wrapper">
        <ion-grid>
        <div class="row calendar-header">
            <ion-col col-2 onClick={this.prevMonth.bind(this)}>
              <ion-icon name="arrow-back"></ion-icon>
            </ion-col>
            <ion-col col-8>
              <button ion-button>{this.month}</button><button ion-button>{this.year}</button>
            </ion-col>
            <ion-col col-2 onClick={this.nextMonth.bind(this)}>
              <ion-icon name="arrow-forward"></ion-icon>
            </ion-col>
        </div>
        <div class="calendar-main">
          <ion-row class="days-of-week">
            <ion-col>Su</ion-col><ion-col>Mo</ion-col><ion-col>Tu</ion-col><ion-col>We</ion-col>
            <ion-col>Th</ion-col><ion-col>Fr</ion-col><ion-col>Sa</ion-col>
          </ion-row>
          <ion-row class="date-row">
            {
              this._thisMonthView.map((day) => {
                return <ion-col col-1><div class="otherDate">{day}</div></ion-col>
              })
            }
          </ion-row>
        </div>
      </ion-grid>
    </div>
    ]
  }

}