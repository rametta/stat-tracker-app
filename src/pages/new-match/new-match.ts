import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ViewController } from 'ionic-angular'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Component({
	selector: 'page-new-match',
	templateUrl: 'new-match.html'
})
export class NewMatchPage {

	maps: FirebaseListObservable<Array<IMap>>
	map: IMap

	modes: FirebaseListObservable<Array<IMode>>
	mode: IMode

	date: string = new Date().toISOString()
	
	outcome: string = 'w'
	wins: number = null
	losses: number = null
	kills: number = null
	deaths: number = null
	assists: number = null

	constructor(
		public navCtrl: NavController, 
		public viewCtrl: ViewController,
		db: AngularFireDatabase
	) { 
		const cod = 'mwr'; // TODO: Get the user selected cod
		this.maps = db.list(`/maps/${cod}/`)
		this.modes = db.list(`/modes/${cod}/`)

		// this.maps
		// 	.subscribe((maps: Array<IMap>) => {
		// 		console.info(this)
		// 		if(maps.length > 0)
		// 			this.map = maps[0] 
		// 	})

		// this.modes
		// 	.subscribe((modes: Array<IMode>) => { 
		// 		if(modes.length > 0)
		// 			this.mode = modes[0] 
		// 	})
	}

	cancel() {
		this.viewCtrl.dismiss()
	}

	addMatch() {
		console.info(this)
	}

}
