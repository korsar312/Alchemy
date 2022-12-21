import { HeroStore } from "./Hero.store";
import { HeroInterface } from "./Hero.interface";

export class HeroModule {
	public store: HeroStore;

	constructor(hero: HeroInterface.THero) {
		this.store = new HeroStore(hero);
	}
}
