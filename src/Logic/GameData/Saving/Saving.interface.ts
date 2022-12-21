import { TimesInterface } from "../GameResources/Domains/Times/Times.interface";

export namespace SavingInterface {
	/**
	 * Параметры для сохранения
	 */
	export type TSave = {
		date: TimesInterface.TFullDate;
	};
}
