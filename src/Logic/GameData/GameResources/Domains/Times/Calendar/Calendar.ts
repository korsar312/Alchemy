import { numberDayOfTheWeek } from "./Lists/Day";
import { numberWeek } from "./Lists/Week";
import { numberMonth } from "./Lists/Month";
import { TimesInterface } from "../Times.interface";

/**
 * Список дней по порядку и их наименования
 */
export const dateLists = {
	day: numberDayOfTheWeek,
	week: numberWeek,
	month: numberMonth,
};

/**
 * max - минут в часах || часов в дне || вней в неделе || недель в месяце || месяцев в году
 * min - начало отсчета
 */
export const lengthDate: TLengthDate = {
	minute: {
		max: 60,
		start: 0,
	},
	hour: {
		max: 24,
		start: 0,
	},
	day: {
		max: 5,
		start: 1,
	},
	week: {
		max: 6,
		start: 1,
	},
	month: {
		max: 10,
		start: 1,
	},
	year: {
		max: Infinity,
		start: -Infinity,
	},
};

type TLengthDate = {
	[key in keyof TimesInterface.TFullDate]: {
		max: TimesInterface.TFullDate[key];
		start: TimesInterface.TFullDate[key];
	};
};
