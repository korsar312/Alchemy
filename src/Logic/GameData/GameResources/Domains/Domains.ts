import { TimesModule } from "./Times/Times.module";
import { SoundsModule } from "./Sounds/Sounds.module";

export class Domains {
	public times: TimesModule;
	public sound: SoundsModule;

	constructor() {
		this.times = new TimesModule();
		this.sound = new SoundsModule();
	}
}

export default new Domains();
