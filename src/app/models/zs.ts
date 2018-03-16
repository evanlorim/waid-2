import { range, pullAt } from 'lodash';
export class Zs {
	private min = 0;
	private max = 1;
	private minDist = 0.1;
	private maxLength = ( this.max - this.min ) / this.minDist;
	vals: Array<number> = [];
	private reorganize(): void {
		if (this.vals.length === 0) {
			return;
		 }
		if (this.vals.length === 1) {
			this.vals = [this.max];
			return;
		}
		if (this.vals.length === 2) {
			this.vals = [this.min, this.max];
			return;
		}
		const increment = (this.max - this.min) / this.vals.length;
		const newVals = range(this.min, this.max + increment, increment);
		this.vals = newVals;
	}
	updateVal(index: number, newVal: number): boolean {
		if ((index === 0) || (index === this.vals.length)) { return false; }
		const lastVal = this.vals[index - 1];
		const nextVal = this.vals[index + 1];
		const lastDiff = newVal - lastVal;
		const nextDiff = nextVal - newVal;
		if ( (lastDiff >= this.minDist) && (nextDiff >= this.minDist) && (newVal > this.min) && (newVal < this.max)) {
			this.vals[index] = newVal;
			return true;
		} else { return false; }
	}
	add(): boolean {
		if (this.vals.length >= this.maxLength) { return false; }
		this.vals.push(0);
		this.reorganize();
		return true;
	}
	remove(index: number): boolean {
		if ( (index >= 0) && (index <= this.vals.length) ) {
			this.vals = pullAt(this.vals, [index]);
			this.reorganize();
		} else { return false; }
	}
}
