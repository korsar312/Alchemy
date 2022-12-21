import React, { FC } from "react";
import { variablesColorsInterface } from "../../../Styles/Variables/VariablesColors/VariablesColors.interface";
import styles from "./Text.styles";
import { variablesFontsInterface } from "../../../Styles/Variables/VariablesFonts/VariablesFonts.interface";
import { observer } from "mobx-react";
import { ComponentsInterface } from "../../Components.interface";
import libs from "../../../Logic/Libs/Libs";
import { LanguageInterface } from "../../../Logic/SystemData/Language/Language.interface";
import SystemController from "../../../Logic/SystemData/SystemController/SystemController";

interface IText {
	text: TText;
	color?: variablesColorsInterface.TColorChoice;
	font?: variablesFontsInterface.TFontChoice;
	caseWord?: TModeReturnWord;
	noLocalization?: boolean;
	extStyle?: ComponentsInterface.TDeepCSSObject;
}

type TText = LanguageInterface.TAllLanguageWord | string | number;
type TModeReturnWord = "CAPITAL" | "SMALL";

const Text: FC<IText> = (props) => {
	const {
		text,
		color = { color: "NEUTRAL", shard: "NEUTRAL_1" },
		font = { fontSize: "BODY", fontWeight: "NORMAL" },
		caseWord,
		noLocalization,
		extStyle,
	} = props;

	const localization = (word: TText) =>
		String(
			word in LanguageInterface.allLanguageWord
				? SystemController("language", "service", "getText", word as LanguageInterface.TAllLanguageWord)
				: word,
		);

	const wordTranslate = (word: TText): string => {
		const wordTranslate = noLocalization ? String(word) : localization(word);

		if (caseWord) {
			switch (caseWord) {
				case "CAPITAL":
					return wordTranslate.toUpperCase();
				case "SMALL":
					return wordTranslate.toLowerCase();
			}
		} else {
			return wordTranslate;
		}
	};

	return <span css={[styles.wrapper, styles.color(color), styles.font(font), ...libs.utils.getArray(extStyle)]}>{wordTranslate(text)}</span>;
};

export default observer(Text);
