import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
	selector: 'page-new-match',
	templateUrl: 'new-match.html'
})
export class NewMatchPage {

	maps = [
		{
			Name: 'Ambush',
			Value: 'ambush'
		},
		{
			Name: 'Backlot',
			Value: 'backlot'
		},
		{
			Name: 'Bloc',
			Value: 'bloc'
		},
		{
			Name: 'Bog',
			Value: 'bog'
		},
		{
			Name: 'Countdown',
			Value: 'countdown'
		},
		{
			Name: 'Crash',
			Value: 'crash'
		},
		{
			Name: 'Crossfire',
			Value: 'crossfire'
		},
		{
			Name: 'District',
			Value: 'district'
		},
		{
			Name: 'Downpour',
			Value: 'downpour'
		},
		{
			Name: 'Overgrown',
			Value: 'overgrown'
		},
		{
			Name: 'Pipeline',
			Value: 'pipeline'
		},
		{
			Name: 'Shipment',
			Value: 'shipment'
		},
		{
			Name: 'Showdown',
			Value: 'showdown'
		},
		{
			Name: 'Strike',
			Value: 'strike'
		},
		{
			Name: 'Vacant',
			Value: 'vacant'
		},
		{
			Name: 'Wet Work',
			Value: 'wetwork'
		}
	]

	modes = [
		{
			Name: 'Cage Match',
			Value: 'cm'
		},
		{
			Name: 'Domination',
			Value: 'dom'
		},
		{
			Name: 'Free For All',
			Value: 'ffa'
		},
		{
			Name: 'Ground War',
			Value: 'gw'
		},
		{
			Name: 'Headquarters',
			Value: 'hq'
		},
		{
			Name: 'Mercenary Team Deathmatch',
			Value: 'mtdm'
		},
		{
			Name: 'Sabotage',
			Value: 'sab'
		},
		{
			Name: 'Hardpoint',
			Value: 'hp'
		},
		{
			Name: 'Search & Destroy',
			Value: 'snd'
		},
		{
			Name: 'Team Deathmatch',
			Value: 'tdm'
		}
	]

	outcome: string;
	wins: number;
	losses: number;
	kills: number;
	deaths: number;
	assists: number;
	date: string;
	mode: string;
	map: string;

	constructor(public navCtrl: NavController, public viewCtrl: ViewController) { 
		this.reset();
	}

	cancel() {
		this.viewCtrl.dismiss();
	}

	reset() {
		this.outcome = 'W';
		this.wins = 0;
		this.losses = 0;
		this.kills = 0;
		this.deaths = 0;
		this.assists = 0;
		this.date = new Date().toISOString();
		this.mode = '';
		this.map = ''
	}

	addMatch() {
		console.log(this.outcome);
		console.log(this.wins);
		console.log(this.losses);
		console.log(this.kills);
		console.log(this.deaths);
		console.log(this.assists);
		console.log(this.date);
		console.log(this.map);
		console.log(this.mode);
	}

}
