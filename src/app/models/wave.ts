import { Constant } from './constant';
import { Rectangle } from './rectangle';
import { uniqueId, findKey } from 'lodash';
export class Wave {
	public constants: { [index: string]: Constant } = {};
	public delta: Constant = new Constant(.5, 0, 2, 'δ', 20);
	public isShifting = false;
	public domain: Rectangle;
	public id = uniqueId('wave_');
	public name?: string;
	public description?: string;
	f(x: number): number { return x; }
	updateConstant(constant: Constant): void {
		const key = findKey(this.constants, {id: constant.id});
		this.constants[key] = constant;
	}
}
