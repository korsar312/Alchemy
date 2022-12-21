import { StylesInterface } from "../../../Logic/SystemData/Styles/Styles.interface";

export namespace variablesColorsInterface {
	/**
	 * Список радужных цветов
	 */
	type EColorRainbow = {
		BLUE: "BLUE";
		GREEN: "GREEN";
		ORANGE: "ORANGE";
		RED: "RED";
		YELLOW: "YELLOW";
	};

	/**
	 * Список оттенков радужных цветов
	 */
	export type EColorShade = {
		LIGHT: "LIGHT";
		NORMAL: "NORMAL";
		DARK: "DARK";
		DARKER: "DARKER";
	};

	/**
	 * Список обычных цветов
	 */
	type EColorNeutral = {
		NEUTRAL: "NEUTRAL";
	};

	/**
	 * Список оттенков обычных цветов
	 */
	export type ENeutralShade = {
		NEUTRAL_1: "NEUTRAL_1";
		NEUTRAL_2: "NEUTRAL_2";
		NEUTRAL_3: "NEUTRAL_3";
		NEUTRAL_4: "NEUTRAL_4";
		NEUTRAL_5: "NEUTRAL_5";
		NEUTRAL_6: "NEUTRAL_6";
		NEUTRAL_7: "NEUTRAL_7";
		NEUTRAL_8: "NEUTRAL_8";
		NEUTRAL_9: "NEUTRAL_9";
		NEUTRAL_10: "NEUTRAL_10";
	};

	/**
	 * Выбор радужных цветов с оттенком
	 */
	type TColor_1 = {
		[key in keyof EColorRainbow]: {
			[key in keyof EColorShade]: string;
		};
	};

	/**
	 * Выбор обычных цветов с оттенком
	 */
	type TColor_2 = {
		[key in keyof EColorNeutral]: {
			[key in keyof ENeutralShade]: string;
		};
	};

	/**
	 * Все цвета
	 */
	export type TColorAll = TColor_1 & TColor_2;

	/**
	 * Тип для цветовых тем
	 */
	export type TColor = {
		[key in StylesInterface.ETheme]: TColorAll;
	};

	// я хз как это по нормальному сделать
	/**
	 * Выбор между обычными или радужными цветами
	 */
	export type TColorChoice =
		| {
				color: keyof EColorRainbow;
				shard: keyof EColorShade;
		  }
		| {
				color: keyof EColorNeutral;
				shard: keyof ENeutralShade;
		  };
}
