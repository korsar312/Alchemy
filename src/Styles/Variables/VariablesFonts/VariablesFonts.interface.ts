import { CSSObject } from "@emotion/react";

export namespace variablesFontsInterface {
	/**
	 * Размер шрифта
	 */
	type fontSize = {
		EXTRABIG: "EXTRABIG";
		BIG: "BIG";
		BODY: "BODY";
		SMALL: "SMALL";
	};

	/**
	 * Жирность шрифта
	 */
	type fontWeight = {
		FAT: "FAT";
		NORMAL: "NORMAL";
		THIN: "THIN";
	};

	export type EFontWeight = keyof fontWeight;
	export type EFontSize = keyof fontSize;

	/**
	 * CSS объект с размерами шрифта
	 */
	type TFontSize = {
		[key in EFontSize]: CSSObject;
	};

	/**
	 * CSS объект с жирностями шрифта
	 */
	type TFontWeight = {
		[key in EFontWeight]: CSSObject;
	};

	/**
	 * Конструктор шрифта
	 */
	export type TFont = {
		fontStandard: CSSObject;
		fontSize: TFontSize;
		fontWeight: TFontWeight;
	};

	/**
	 * Выбор шрифта
	 */
	export type TFontChoice = {
		fontSize: EFontSize;
		fontWeight: EFontWeight;
	};
}
