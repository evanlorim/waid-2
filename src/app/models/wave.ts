import { Constant } from './constant';
import { Box } from './box';
import { assign } from 'lodash';
export class Wave {
	public domain = new Box(0, 1, 0, 1, 200);
	public constants: { [index: string]: Constant };
	public name: string;
	public description: string;
	public z = new Constant(0, 0, 1, '\\z');
	constructor () {
		assign(this.constants, {delta: new Constant(.5, 0, 2, 'δ')});
	}
	f(x: number, t: number = 0): number {
		return x + ( t * this.constants['delta'].val );
	}
}
