import { SoundsServices } from "./Sounds.services";

export class SoundsModule {
	public services: SoundsServices;

	constructor() {
		this.services = new SoundsServices();
	}
}
