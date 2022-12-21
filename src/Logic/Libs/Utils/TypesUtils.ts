export namespace typesUtils {
	/**
	 * Необходимо только 1 из 2х свойств
	 */
	export type OneOfTwo<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
		{
			[K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
		}[Keys];

	/**
	 * Тип для изменения объекта для конструкций типа {...obj, ...val}
	 */
	export type ChangeObject<obj> = Partial<TKey<obj>>;

	type TKey<obj> = {
		[T in keyof obj]: obj[T];
	};

	/**
	 * Тип для диапазона значений типа (от 20 до 30 (type T = NumberRange<20, 31>) )
	 */
	export type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

	type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc["length"]]>;

	/**
	 * Тип для негораниченного по вложенности массива )
	 */
	export type RecursiveArray<type> = {
		[index: number]: RecursiveArray<type> | type;
		length: number;
	};
}
