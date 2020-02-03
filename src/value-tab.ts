export class valueTab {

	tab: HTMLElement;
	value: number;

	constructor(tab, value) {
		this.tab = tab;
		this.value = value;
		this.setValue();
	}

	setValue() {
		this.tab.textContent = `${this.value}`;
	}
}