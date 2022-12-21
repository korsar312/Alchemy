import { StylesStore } from "./Styles.store";

export class StylesModule {
	public store: StylesStore;

	constructor() {
		this.store = new StylesStore();
	}
}
