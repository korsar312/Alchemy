import { TimesInterface } from "./Times.interface";
import { currentTimes } from "./Setting/CurrentTimes";
import { makeAutoObservable } from "mobx";
import { dateLists, lengthDate } from "./Calendar/Calendar";

export class TimesStore {
	private currentTimes: TimesInterface.TFullDate = currentTimes;
	private dateLists = dateLists;

	constructor() {
		makeAutoObservable(this);
	}

	/**
	 * Возвращает список дней по порядку и их наименования
	 */
	public getDays() {
		return this.dateLists.day;
	}

	/**
	 * Возвращает текущую дату и время
	 */
	public getCurrentDate(): TimesInterface.TFullDate {
		return this.currentTimes;
	}

	/**
	 * Возвращает наименование для необходимого дня
	 */
	public getNameDay(day: TimesInterface.TFullDate["day"]): TimesInterface.EDayOfTheWeekWord {
		return this.dateLists.day[day];
	}

	/**
	 * Устанавливает текущую дату и время
	 */
	public setTime(date: TimesInterface.TFullDate) {
		this.currentTimes = date;
	}

	/**
	 * Добавляет минуты к текущей дате (12 - +12 минут, 60 - +1 час, 1440 - +1 день)
	 */
	public addTime(minutes: number) {
		let calculateMinutes = minutes;

		for (calculateMinutes; calculateMinutes >= 60; calculateMinutes -= 60) {
			this.addHours();
		}

		this.currentTimes.minute = calculateMinutes as TimesInterface.TFullDate["minute"];
	}

	private addHours() {
		this.currentTimes.hour = this.addCount(
			this.currentTimes.hour,
			lengthDate.hour.max,
			lengthDate.hour.start,
			this.addDay,
		) as TimesInterface.TFullDate["hour"];
	}

	private addDay() {
		this.currentTimes.day = this.addCount(
			this.currentTimes.day,
			lengthDate.day.max,
			lengthDate.day.start,
			this.addWeek,
		) as TimesInterface.TFullDate["day"];
	}

	private addWeek() {
		this.currentTimes.week = this.addCount(
			this.currentTimes.week,
			lengthDate.week.max,
			lengthDate.week.start,
			this.addMonth,
		) as TimesInterface.TFullDate["day"];
	}

	private addMonth() {
		this.currentTimes.month = this.addCount(
			this.currentTimes.month,
			lengthDate.month.max,
			lengthDate.month.start,
			this.addYears,
		) as TimesInterface.TFullDate["day"];
	}

	private addYears() {
		this.currentTimes.year += 1;
	}

	private addCount(count: number, max: number, min: number, addFunc: () => void) {
		if (count + 1 >= max) {
			addFunc.call(this);
			return min;
		} else {
			return count + 1;
		}
	}
}
