import { generatePath, Params } from "react-router-dom";
import { RouteInterfaces } from "../Route.interfaces";
import type { RouteStore } from "../Route.store";

export class RouteService {
	private routeStore: RouteStore;

	constructor(routeStore: RouteStore) {
		this.routeStore = routeStore;
	}

	/**
	 * Программный переход на страницы
	 * @params path - имя роута
	 * @params params - параметры, что передаются в URL
	 * @params state - параметры, что не передаются в URL
	 */
	public RouterGo(path: RouteInterfaces.PathName, params?: Params, state?: Record<string, any>): void {
		const navigate = this.routeStore.getNavigation();

		navigate(generatePath(path, params), { replace: false, state });
	}
}
