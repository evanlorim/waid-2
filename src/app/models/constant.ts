import { assign, uniqueId } from 'lodash';

export class Constant {
	value: number;
	min: number;
	max: number;
	nTicks = 20;
	step: number;
	id = uniqueId('constant_');
	name: string;
	constructor(value, min, max, name, nTicks) {
		assign(this, {value, min, max, nTicks, name});
		this.step = (this.max - this.min) / this.nTicks;
	}
}

