import { Wave } from '../wave';
import { Constant } from '../constant';
import { reduce, range} from 'lodash';
export class SquareWave {
	public name = 'Square Wave';
	public description = 'a/n_i * sin(n_i * b * pi * x + c) + d Sum 1 to N Odds';
	public constants = {
		a: new Constant(.5, 0, 1, 'a'),
		b: new Constant(2, 0, 8, 'b'),
		c: new Constant(0, -1, 1, 'c'),
		d: new Constant(.5, 0, 2, 'd'),
		N: new Constant(21, 1, 41, 'N')
	};
	f(x: number, t: number = 0): number {
		const pi = Math.PI;
		const a = this.constants['a'].val;
		const b = this.constants['b'].val;
		const c = this.constants['c'].val;
		const d = this.constants['d'].val;
		const N = this.constants['N'].val;
		const delta = this.constants['delta'].val;

		x = x + (delta * t);

		const ns = range(1, N + 1, 2);

		return reduce(ns, (sum, n) => {
			return (a / n) * Math.sin(b * pi * x * n + c) + sum;
		}, d);
	}
}
