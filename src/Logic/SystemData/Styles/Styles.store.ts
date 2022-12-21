import { makeAutoObservable } from "mobx";
import { StylesInterface } from "./Styles.interface";

export class StylesStore {
	private theme: StylesInterface.ETheme = StylesInterface.ETheme.DARK;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Устанавливает выбранную тему
	 * @param theme - тема
	 */
	public setTheme(theme: StylesInterface.ETheme) {
		this.theme = theme;
	}

	/**
	 * Светлая ли сейчас тема активна
	 */
	public isLightTheme() {
		return this.theme === StylesInterface.ETheme.LIGHT;
	}

	/**
	 * Возвращает выбранную тему
	 */
	public getTheme() {
		return this.theme;
	}
}
