import React, { FC } from "react";
import styles from "./Day.styles";
import Text from "../../0.Cores/Text/Text";
import ContentWrapper from "../../0.Cores/ContentWrapper/ContentWrapper";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import { ComponentsInterface } from "../../Components.interface";
import { LanguageInterface } from "../../../Logic/SystemData/Language/Language.interface";
import { TimesInterface } from "../../../Logic/GameData/GameResources/Domains/Times/Times.interface";

interface IDay {
	date: TDay;
	color?: variablesColorsInterface.TColorChoice;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

type TDay = {
	weekDay: TimesInterface.EDayOfTheWeekWord;
	numberDay: number | string;
	bottomPlace?: Day_TBottomPlace;
};

export type Day_TBottomPlace = {
	icon: FC<React.SVGProps<SVGSVGElement>>;
	title?: LanguageInterface.TAllLanguageWord;
};

const Day: FC<IDay> = (props) => {
	const { date, color, extStyle } = props;

	return (
		<ContentWrapper extStyle={[styles.wrapper, extStyle]} color={color}>
			<div css={styles.row}>
				<Text text={date.weekDay} font={{ fontSize: "SMALL", fontWeight: "NORMAL" }} noLocalization />
			</div>

			<div css={styles.row}>
				<Text text={date.numberDay} font={{ fontSize: "BODY", fontWeight: "NORMAL" }} noLocalization />
			</div>

			<div css={styles.row}>{date.bottomPlace && <date.bottomPlace.icon />}</div>
		</ContentWrapper>
	);
};

export default Day;
