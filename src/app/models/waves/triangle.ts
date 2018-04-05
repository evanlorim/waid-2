import { Wave } from '../wave';
import { Constant } from '../constant';
import { uniqueId, reduce, range} from 'lodash';
export class TriangleWave extends Wave {
	public name = 'Triangle Wave';
	public description = 'a/n_i * sin(n_i * b * pi * x + c) + d Sum 1 to N Odds';
	public constants = {
		a: new Constant(.5, 0, 1, 'a', 20),
		b: new Constant(2, 0, 8, 'b', 20),
		c: new Constant(0, -1, 1, 'c', 20),
		d: new Constant(.5, 0, 2, 'd', 20),
		N: new Constant(21, 1, 41, 'N', 20)
	};
	public id = uniqueId('triangle_wave_');
	f(x: number): number {
		const pi = Math.PI;
		const a = this.constants['a'].value;
		const b = this.constants['b'].value;
		const c = this.constants['c'].value;
		const d = this.constants['d'].value;
		const N = this.constants['N'].value;
		const delta = this.delta.value;

		const ns = range(1, N + 1, 2);

		return reduce(ns, (sum, n) => {
			let i = 0;
			if (n > 1) {
				i = (n - 1) / 2;
			}
			return (a * Math.pow(-1, i) * Math.pow(n, -2)) * Math.sin(b * pi * x * n + c) + sum;
		}, d);
	}
	private g(x: number): number {
		return this.constants['a'].value * Math.sin(this.constants['b'].value * Math.PI * x + this.constants['c'].value);
	}
}
