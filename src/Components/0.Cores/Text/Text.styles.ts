import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import { variablesFontsInterface } from "../../../Styles/Variables/VariablesFonts/VariablesFonts.interface";

class TextStyles extends Styles {
	public wrapper: CSSObject = {
		transition: this.variablesProportions.transition,
	};

	public color(colors: variablesColorsInterface.TColorChoice): CSSObject {
		return {
			color: this.variablesColors.getColor(colors),
		};
	}

	public font(fonts: variablesFontsInterface.TFontChoice): CSSObject {
		return {
			...this.variablesFonts.fontsConfig(fonts),
		};
	}
}

export default new TextStyles();
