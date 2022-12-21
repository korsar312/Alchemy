import { LanguageService } from "./Services/Language.service";
import { LanguageStore } from "./Language.store";

export class LanguageModule {
	public service: LanguageService;
	public store: LanguageStore;

	constructor() {
		this.service = new LanguageService();
		this.store = new LanguageStore();
	}
}
