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

	users = [
		{
			name: 'VeeMerk',
			photo: 'http://pbs.twimg.com/profile_images/804806890974756865/FG_VwiDo_normal.jpg',
		},
		{
			name: 'GoLouis',
			photo: 'http://pbs.twimg.com/profile_images/488346609215078400/DwT5OcHi_normal.jpeg',
		},
		{
			name: 'Cryonical',
			photo: 'http://pbs.twimg.com/profile_images/489774237461123072/WBa62hi0_normal.png',
		},
	]

	profilePage = ProfilePage;
	filteredUsers;

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController
	) {
		this.filteredUsers = this.users;
	 }

	showMatchModal() {
		let modal = this.modalCtrl.create(NewMatchPage);
		modal.present();
	}

	filterUsers(value) {
		this.filteredUsers = this.users.filter(u => u.name.toLowerCase().includes(value.toLowerCase()));
	}

}