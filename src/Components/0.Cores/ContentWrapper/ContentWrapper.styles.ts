import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";

class ContentWrapperStyles extends Styles {
	public wrapper: CSSObject = {
		transition: this.variablesProportions.transition,
	};

	public color(colors: variablesColorsInterface.TColorChoice): CSSObject {
		return {
			background: this.variablesColors.getColor(colors),
		};
	}
}

export default new ContentWrapperStyles();
