import { CSSObject } from "@emotion/react";
import { Styles } from "../../Styles/Styles";

class BaseLayoutStyles extends Styles {
	private padding = 20;

	public wrapper: CSSObject = {
		padding: this.padding,
		height: `calc(100vh - ${this.padding * 2}px)`,
	};
}

export default new BaseLayoutStyles();
