import { Domains } from "./Domains/Domains";
import { Lists } from "./Lists/Lists";

export class GameResources {
	public domains: Domains;
	public lists: Lists;

	constructor() {
		this.domains = new Domains();
		this.lists = new Lists();
	}
}
