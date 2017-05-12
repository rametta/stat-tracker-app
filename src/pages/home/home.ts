import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { NewMatchPage } from './../new-match/new-match';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController
	) { }

	showProfileModal() {
		let modal = this.modalCtrl.create(ProfilePage);
		modal.present();
	}

	showMatchModal() {
		let modal = this.modalCtrl.create(NewMatchPage);
		modal.present();
	}

}
