import { RouteObject } from "react-router-dom";

export namespace RouteInterfaces {
	/**
	 * Имя пути и путь роута
	 */
	export enum PathName {
		HOME = "/",
		ERROR = "*",
	}

	/**
	 * Тип для пути
	 */
	export interface IRoute extends Omit<RouteObject, "path"> {
		path: PathName;
		children?: IRoute[];
	}
}
