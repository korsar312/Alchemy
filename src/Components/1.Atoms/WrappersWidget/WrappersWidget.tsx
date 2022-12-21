import React, { FC, ReactNode } from "react";
import styles from "./WrappersWidget.styles";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import ContentWrapper from "../../0.Cores/ContentWrapper/ContentWrapper";
import { observer } from "mobx-react";
import { ComponentsInterface } from "../../Components.interface";

interface IWrappersWidget {
	children: ReactNode;
	color?: variablesColorsInterface.TColorChoice;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

const WrappersWidget: FC<IWrappersWidget> = (props) => {
	const { children, color = { color: "NEUTRAL", shard: "NEUTRAL_9" }, extStyle } = props;

	return <ContentWrapper extStyle={[styles.wrapper, styles.color(color), extStyle]}>{children}</ContentWrapper>;
};

export default observer(WrappersWidget);
