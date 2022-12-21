import { TimesStore } from "./Times.store";

export class TimesModule {
	public store: TimesStore;

	constructor() {
		this.store = new TimesStore();
	}
}
