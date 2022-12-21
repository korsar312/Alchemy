import React, { FC, ReactNode } from "react";
import { ComponentsInterface } from "../../Components.interface";
import styles from "./Button.styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import libs from "../../../Logic/Libs/Libs";

interface IButton {
	children: ReactNode;
	onClick: () => void;
	color?: variablesColorsInterface.TColorChoice;
	hoverColor?: variablesColorsInterface.TColorChoice;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const Button: FC<IButton> = (props) => {
	const { children, onClick, color = { color: "NEUTRAL", shard: "NEUTRAL_9" }, hoverColor, extStyle } = props;

	return (
		<button onClick={onClick} css={[styles.wrapper, styles.color(color, hoverColor), ...libs.utils.getArray(extStyle)]}>
			{children}
		</button>
	);
};
export default Button;
