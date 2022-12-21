import { Styles } from "./Styles/Styles";

class BaseLayoutStyles extends Styles {
	public background = () => this.variablesColors.getColor({ color: "NEUTRAL", shard: "NEUTRAL_10" });
	public transition = () => `background-color ` + this.variablesProportions.transition;
}

export default new BaseLayoutStyles();
