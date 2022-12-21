import { Styles } from "../../../Styles/Styles";
import { CSSObject } from "@emotion/react";

class DragWrapperStyles extends Styles {
	public wrapper(dragElement: boolean): CSSObject {
		return {
			minWidth: `${dragElement ? 100 : 0}px`,
			margin: `0 ${dragElement ? -50 : 0}px`,
			transition: `ease-in-out ${dragElement ? 0.3 : 0}s`,
			zIndex: dragElement ? 5 : 0,
			"&:hover": {
				margin: `0 ${dragElement ? 0 : -50}px`,
			},
		};
	}
}

export default new DragWrapperStyles();
