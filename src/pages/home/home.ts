import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { NewMatchPage } from './../new-match/new-match';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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
		}
	]

	filterValue: string;
	profilePage = ProfilePage;
	filteredUsers;
	items: FirebaseListObservable<any[]>;

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController,
		//db: AngularFireDatabase
	) {
		this.filteredUsers = this.users;
		//this.items = db.list('/stats/');
	 }

	showMatchModal() {
		let modal = this.modalCtrl.create(NewMatchPage);
		modal.present();
	}

	filterUsers() {
		this.filteredUsers = this.users.filter(u => u.name.toLowerCase().includes(this.filterValue.toLowerCase()));
	}

}