import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ChildUtility } from 'elevate-shared-reactive-extensions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      let childUtil = new ChildUtility();
      console.log(childUtil.toString());
  }

}
