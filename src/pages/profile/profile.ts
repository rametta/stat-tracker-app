import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { NewMatchPage } from './../new-match/new-match';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {

	profileTab = 'totals';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController
	) {
		navParams.get('userId');
	}

	showMatchModal() {
		let modal = this.modalCtrl.create(NewMatchPage);
		modal.present();
	}

}