import { RouteStore } from "./Route.store";
import { RouteService } from "./Services/Route.service";

export class RouteModule {
	public store: RouteStore;
	public service: RouteService;

	constructor() {
		this.store = new RouteStore();
		this.service = new RouteService(this.store);
	}
}
