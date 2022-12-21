import { CSSObject } from "@emotion/react";
import { Styles } from "../../../Styles/Styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";

class WrappersWidgetStyles extends Styles {
	private border = 3;
	private padding = 12;

	public wrapper: CSSObject = {
		padding: this.padding,
		borderRadius: this.variablesProportions.radius,
		margin: `${this.border}px`,
		overflow: "overlay",
		"&::-webkit-scrollbar-track": {
			margin: this.padding,
		},
	};

	public color(colors: variablesColorsInterface.TColorChoice): CSSObject {
		return {
			outline: `solid ${this.border}px ${this.variablesColors.getColor(colors, 0.5)}`,
		};
	}
}

export default new WrappersWidgetStyles();
