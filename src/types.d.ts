interface IMatch {
	id: string;
	mapId: string;
	modeId: string;
	date: string;
	kills: number;
	deaths: number;
	assists: number;
	kd: number;
	outcome: string;
	wins: number;
	losses: number;
	wl: number;
}

interface IMap {
	id: string;
	name: string;
	bio: string;
	photo: string;
}

interface IMode {
	id: string;
	name: string;
	bio: string;
}

interface IUser {
	details: IUserDetails;
	stats: IStat;
}

interface IUserDetails {
	id: string;
	name: string;
	bio: string;
	photo: string;
	country: string;
}

interface IStat {
	[name: string]: {
		matches: Array<IMatch>;
		totals: any;
	}
}