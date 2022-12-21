import { typesUtils } from "../Logic/Libs/Utils/TypesUtils";
import { CSSObject } from "@emotion/react";

export namespace ComponentsInterface {
	export type TDeepCSSObject = typesUtils.RecursiveArray<CSSObject | undefined> | CSSObject;
}
