import { Mixins } from "./Mixins/Mixins";
import { VariablesColors } from "./Variables/VariablesColors/VariablesColors";
import { VariablesProportions } from "./Variables/VariablesProportions/VariablesProportions";
import { VariablesFonts } from "./Variables/VariablesFonts/VariablesFonts";

export class Styles {
	protected mixins: Mixins;
	protected variablesColors: VariablesColors;
	protected variablesFonts: VariablesFonts;
	protected variablesProportions: VariablesProportions;

	constructor() {
		this.mixins = new Mixins();
		this.variablesColors = new VariablesColors();
		this.variablesFonts = new VariablesFonts();
		this.variablesProportions = new VariablesProportions();
	}
}

export default new Styles();
