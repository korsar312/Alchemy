import { Styles } from "../../../Styles/Styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import { CSSObject } from "@emotion/react";

class ButtonStyles extends Styles {
	public wrapper: CSSObject = {
		border: "none",
		padding: 0,
		transition: this.variablesProportions.fastTransition,
		cursor: "pointer",
	};

	public color(colors: variablesColorsInterface.TColorChoice, hover?: variablesColorsInterface.TColorChoice): CSSObject {
		return {
			background: this.variablesColors.getColor(colors),
			"&:hover": {
				background: this.variablesColors.getColor(hover || colors),
			},
		};
	}
}

export default new ButtonStyles();
