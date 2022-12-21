import { Items } from "./Items/Items";

export class Lists {
	private items: Items;

	constructor() {
		this.items = new Items();
	}
}

export default new Lists();
