import { SavingServices } from "./Saving.services";

export class SavingModule {
	public services: any;

	constructor() {
		this.services = new SavingServices();
	}
}
