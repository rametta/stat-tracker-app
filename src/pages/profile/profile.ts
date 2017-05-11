import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {

	profileTab = 'totals';

	constructor(
		public navCtrl: NavController, 
		public viewCtrl: ViewController
		) { }

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
