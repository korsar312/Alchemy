import { dictionary } from "../Language.dictionary";
import { LanguageInterface } from "../Language.interface";
import SystemController from "../../SystemController/SystemController";

export class LanguageService {
	private readonly language: LanguageInterface.TLanguage = dictionary;

	/**
	 * Возвращает выбранное предложения для языковой модели
	 * @param wordKey - выбранное предложение
	 */
	public getText(wordKey: LanguageInterface.TAllLanguageWord) {
		const lang = SystemController("language", "store", "getCurrentLanguage");
		// @ts-ignore
		return this.language[wordKey][lang];
	}
}
