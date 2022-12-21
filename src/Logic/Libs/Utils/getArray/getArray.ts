/**
 * Возвращает массив
 */
export function getArray(arr: any) {
	return Array.isArray(arr) ? arr.flat() : [arr];
}
