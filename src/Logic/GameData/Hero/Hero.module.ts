import { HeroStore } from "./Hero.store";

export class HeroModule {
	public store: HeroStore;

	constructor() {
		this.store = new HeroStore();
	}
}
