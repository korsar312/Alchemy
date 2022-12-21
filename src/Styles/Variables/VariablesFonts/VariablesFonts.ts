import { variablesFontsInterface } from "./VariablesFonts.interface";
import { VariablesFont } from "./VariablesFonts.fonts";

export class VariablesFonts {
	private readonly variableFont: variablesFontsInterface.TFont = VariablesFont;

	/**
	 * Возвращает выбранной шрифт
	 * @param font - размер и жирность
	 */
	public fontsConfig = (font: variablesFontsInterface.TFontChoice) => ({
		...this.variableFont.fontStandard,
		...this.variableFont.fontSize[font.fontSize],
		...this.variableFont.fontWeight[font.fontWeight],
	});
}
