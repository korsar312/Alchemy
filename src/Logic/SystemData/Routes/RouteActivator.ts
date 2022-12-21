import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SystemController from "../SystemController/SystemController";

/**
 * Компонент для реализации программного роутинга
 */
export const RouteActivator = () => {
	const navigate = useNavigate();

	useEffect(() => {
		SystemController("routes", "store", "setNavigation", navigate);
		// eslint-disable-next-line
	}, []);

	return null;
};
