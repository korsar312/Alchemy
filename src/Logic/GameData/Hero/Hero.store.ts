import { makeAutoObservable } from "mobx";

export class HeroStore {
	constructor() {
		makeAutoObservable(this);
	}
}
