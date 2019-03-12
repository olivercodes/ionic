    // return [
    //   <div >
    //     <ion-grid fixed>

    //       { /* Start Header */}
    //       <div>
    //         <ion-row>
    //           <ion-col col-2>
    //             <ion-button onClick={this.prevMonth.bind(this)}>
    //               <ion-icon name="arrow-back"></ion-icon>
    //             </ion-button> 
    //           </ion-col>
    //           <ion-col col-8>
    //             <ion-button fill="clear">{this.month}</ion-button>
    //             <ion-button fill="clear">{this.year}</ion-button>
    //           </ion-col>
    //           <ion-col col-2>
    //             <ion-button onClick={this.nextMonth.bind(this)}>
    //               <ion-icon name="arrow-forward"></ion-icon>
    //             </ion-button> 
    //           </ion-col>
    //         </ion-row>
    //       </div>
    //       { /* End Header */}

    //       { /* Start Calendar */ }
    //       <div>
    //         <ion-row>
    //           <ion-col>Su</ion-col>
    //           <ion-col>Mo</ion-col>
    //           <ion-col>Tu</ion-col>
    //           <ion-col>We</ion-col>
    //           <ion-col>Th</ion-col>
    //           <ion-col>Fr</ion-col>
    //           <ion-col>Sa</ion-col>
    //         </ion-row>
    //         </div>
    //         <div>
    //         <ion-row>
    //           { this._thisMonthView.map((dayValue) => {
    //             return <ion-col col-1><ion-button fill="clear">{dayValue}</ion-button></ion-col>
    //           })}
    //         </ion-row>
    //         </div>
    //         <div>
    //         <ion-row >
    //           <ion-col col-6><ion-button fill="clear">Today</ion-button></ion-col>
    //           <ion-col col-6><ion-button fill="clear">Cancel</ion-button></ion-col>
    //         </ion-row>
    //       </div>

    //     </ion-grid>
    //   </div>
    // ]