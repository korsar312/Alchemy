import { getArray } from "./getArray/getArray";
import { getStringCurrentTime } from "./getStringCurrentTime/getStringCurrentTime";

export class Utils {
	/** Возвращает массив */
	public getArray = getArray;

	/** Возвращает текущее время */
	public getStringCurrentTime = getStringCurrentTime();
}
