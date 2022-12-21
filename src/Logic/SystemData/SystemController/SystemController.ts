import { RouteModule } from "../Routes/Route.module";
import { LanguageModule } from "../Language/Language.module";
import { StylesModule } from "../Styles/Styles.module";

type TModules = {
	style: StylesModule;
	language: LanguageModule;
	routes: RouteModule;
};

class SystemCreator {
	private readonly modules: TModules;

	constructor() {
		this.modules = {
			style: new StylesModule(),
			language: new LanguageModule(),
			routes: new RouteModule(),
		};
	}

	/**
	 * Возвращает инициализированные модули
	 */
	public get invoker() {
		return this.modules;
	}
}

const systemCreator = new SystemCreator();

/**
 * Функция вызывающая методы модулей
 * @params domain - модуль
 * @params locate - зона модуля
 * @params action - метод зоны
 * @params props - аргументы метода
 */
function SystemController<domain extends keyof TModules, locate extends keyof TModules[domain], action extends keyof TModules[domain][locate]>(
	domain: domain,
	locate: locate,
	action: action,
	...props: TModules[domain][locate][action] extends (...args: infer P) => any ? P : never
): TModules[domain][locate][action] {
	const targetClass = systemCreator.invoker[domain][locate];
	const targetMethod = targetClass[action];

	switch (typeof targetMethod) {
		case "function":
			return targetMethod.call(targetClass, props);
		default:
			return targetMethod;
	}
}

export default SystemController;
