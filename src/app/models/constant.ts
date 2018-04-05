import { assign } from 'lodash';
import { Uniq } from './uniq';

export class Constant extends Uniq {
	private _val: number;
	private _min: number;
	private _max: number;
	private _nTicks: number;
	private _step: number;
	private _description: string;
	constructor(val, min, max, description, nTicks = 20) {
		super();
		assign(this, {_val: val, _min: min, _max: max, _nTicks: nTicks, _description: description});
		this._step = (this._max - this._min) / this._nTicks;
	}
	get val(): number { return this._val; }
	set val(val: number) {
		if (this.val === val) { return; }
		if (val < this.min) {
			if (this.val === this.min) { return; }
			this.val = this.min;
			return; // true
		} else if (val > this.max) {
			if (this.val === this.max) { return; }
			this.val = this.max;
			return; // true
		} else {
			this.val = val;
			return; // true
		}
	}
	get min(): number { return this._min; }
	get max(): number { return this._max; }
	get step(): number { return this._step; }
	get name(): string { return this._description; }
}
