import { SavingModule } from "../Saving/Saving.module";
import { HeroModule } from "../Hero/Hero.module";
import { GameResources } from "../GameResources/GameResources";

class GameController {
	private readonly resources: GameResources;
	private hero: HeroModule;
	private save: SavingModule;

	constructor() {
		this.resources = new GameResources();
		this.hero = new HeroModule({});
		this.save = new SavingModule();
	}

	getDays() {
		return this.resources.domains.times.store.getDays();
	}

	getCurrentDate() {
		return this.resources.domains.times.store.getCurrentDate();
	}
}

export default new GameController();
