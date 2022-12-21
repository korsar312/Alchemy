import { variablesColorsInterface } from "./VariablesColors.interface";
import { VariablesColorsList } from "./VariablesColors.color";
import SystemController from "../../../Logic/SystemData/SystemController/SystemController";

export class VariablesColors {
	private readonly color: variablesColorsInterface.TColor = VariablesColorsList;

	/**
	 * Возвращает выбранной цвет с его оттенком
	 * @param colors - цвет и оттенок
	 * @param opacity - прозрачность
	 */
	public getColor(colors: variablesColorsInterface.TColorChoice, opacity: number = 1) {
		//TODO переделать чтоб ts не орал из за colors.shard
		const theme = SystemController("style", "store", "getTheme");
		//@ts-ignore
		const choseColor = String(this.color[theme][colors.color][colors.shard]);
		return this.hex2rgba(choseColor, opacity);
	}

	/**
	 * Преобразование HEX формата в RGBa
	 * @param hex - формата цвета HEX
	 * @param opacity - прозрачность
	 */
	private hex2rgba = (hex: string, opacity: number) => {
		const RGB = String(hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)));
		return `rgba(${RGB},${opacity})`;
	};
}
