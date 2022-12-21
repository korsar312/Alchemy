import { NavigateFunction } from "react-router-dom";

export class RouteStore {
	private navigation: null | NavigateFunction = null;

	/**
	 * Устанавливает хук useNavigation в переменную
	 * @params navigate - сам хук
	 */
	public setNavigation(navigate: NavigateFunction) {
		this.navigation = navigate;
	}

	/**
	 * Получаем хук useNavigation из переменной
	 */
	public getNavigation() {
		return this.navigation as NavigateFunction;
	}
}
