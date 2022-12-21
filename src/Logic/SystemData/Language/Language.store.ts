import { makeAutoObservable } from "mobx";
import { LanguageInterface } from "./Language.interface";

export class LanguageStore {
	private currentLanguage: LanguageInterface.ELanguageType = LanguageInterface.ELanguageType.RU;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Устанавливает языковую модель
	 * @param language - язык
	 */
	public setCurrentLanguage(language: LanguageInterface.ELanguageType) {
		this.currentLanguage = language;
	}

	/**
	 * Возвращает текущую языковую модель
	 */
	public getCurrentLanguage() {
		return this.currentLanguage;
	}
}
