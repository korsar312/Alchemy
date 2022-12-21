import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class DayStyles extends Styles {
	public wrapper: CSSObject = {
		display: "flex",
		flexDirection: "column",
		borderRadius: this.variablesProportions.radius,
		gap: 18,
		padding: "16px 6px",
	};

	public row: CSSObject = {
		...this.mixins.flexCenter,
	};
}

export default new DayStyles();
