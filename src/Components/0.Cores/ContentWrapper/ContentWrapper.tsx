import React, { FC, ReactNode } from "react";
import styles from "./ContentWrapper.styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import libs from "../../../Logic/Libs/Libs";
import { observer } from "mobx-react";
import { ComponentsInterface } from "../../Components.interface";

interface IContentWrapper {
	children: ReactNode;
	color?: variablesColorsInterface.TColorChoice;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const ContentWrapper: FC<IContentWrapper> = (props) => {
	const { children, color = { color: "NEUTRAL", shard: "NEUTRAL_9" }, extStyle } = props;

	return <div css={[styles.wrapper, styles.color(color), ...libs.utils.getArray(extStyle)]}>{children}</div>;
};

export default observer(ContentWrapper);
