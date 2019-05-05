import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  Scope = '';
  Date = '';
  loadInput:any ={};
  radioButton: string = 'pharmaceuticals';

  constructor(private User: UserService) { }

  ngOnInit() {
  }

  loadGazette(value){
    this.User.gazette(value).subscribe(rslt => {
      this.loadInput = rslt;
      alert('YOu  have successfuly chosen');

    });
    // if (this.radioButton == 'pharmaceuticals') {

    //   var pharm = {

    //     "2019-01-04": ,
    //     "2019-01-18": value.w1698446_itemTitle,
    //     "2019-01-25": value.2019-01-25,
    //     "2019-02-01": value.w1698446_authorOfBook,
    //     "2019-02-08": value.w1698446_publisherOfBook,
    //     "2019-02-15": value.w1698446_totPages,
    //     "2019-02-22": value.w1698446_ItemISBN,
    //     "2019-03-01": value.w1698446_itemTitle,
    //     "2019-03-08": value.w1698446_itemSector,
    //     "2019-03-22": value.w1698446_authorOfBook,
    //     "2019-03-29": value.w1698446_publisherOfBook,
    //     "2019-04-05": value.w1698446_totPages,
    //     "2019-04-12": value.w1698446_totPages,
    //   };
    //   var pharms = {
    //     'pharmaceuticals': pharm,
    //     'land': null,
    //     'railway_dis': null,
    //     'railway_bn': null
    //   };

    //   this.User.gazette(pharms).subscribe(rslt => {

    //     if (rslt) {

    //       alert('successful');

    //     } else {

    //       alert('not successful');
    //     }
    //   });

    // } else {

    //   if (this.radioButton == 'land') {

    //     var lan = {
  
    //       "2019-01-04": ,
    //       "2019-01-18": value.w1698446_itemTitle,
    //       "2019-01-25": value.2019-01-25,
    //       "2019-02-01": value.w1698446_authorOfBook,
    //       "2019-02-08": value.w1698446_publisherOfBook,
    //       "2019-02-15": value.w1698446_totPages,
    //       "2019-02-22": value.w1698446_ItemISBN,
    //       "2019-03-01": value.w1698446_itemTitle,
    //       "2019-03-08": value.w1698446_itemSector,
    //       "2019-03-22": value.w1698446_authorOfBook,
    //       "2019-03-29": value.w1698446_publisherOfBook,
    //       "2019-04-05": value.w1698446_totPages,
    //       "2019-04-12": value.w1698446_totPages,
    //     };

    //     var pharms = {
    //       'pharmaceuticals': pharm,
    //       'land': null,
    //       'railway_dis': null,
    //       'railway_bn': null
    //     };
  }
}
