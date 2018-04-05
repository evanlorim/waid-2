import { Wave } from '../wave';
import { Constant } from '../constant';
import { uniqueId, reduce, range} from 'lodash';
export class SquareWave extends Wave {
	public name = 'Square Wave';
	public description = 'a/n_i * sin(n_i * b * pi * x + c) + d Sum 1 to N Odds';
	public constants = {
		a: new Constant(.5, 0, 1, 'a', 20),
		b: new Constant(2, 0, 8, 'b', 20),
		c: new Constant(0, -1, 1, 'c', 20),
		d: new Constant(.5, 0, 2, 'd', 20),
		N: new Constant(21, 1, 41, 'N', 20)
	};
	public id = uniqueId('square_wave_');
	f(x: number): number {
		const series = range(1, this.constants['N'].value + 1, 2);
		const res = reduce(series, (sum, n) => {
			return (this.g(n * x) / n ) + sum;
		}, 0);
		return res + this.constants['d'].value;
	}
	private g(x: number): number {
		return this.constants['a'].value * Math.sin(this.constants['b'].value * Math.PI * x + this.constants['c'].value);
	}
}
