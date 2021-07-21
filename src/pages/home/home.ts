import { Component } from '@angular/core';
//import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  handleAddDataButton(){
    this.navCtrl.push()
  }
  }
  
    