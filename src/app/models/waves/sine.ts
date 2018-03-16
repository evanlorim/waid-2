import { Wave } from '../wave';
import { Constant } from '../constant';

export class SineWave extends Wave {
	public name = 'Sine Wave';
	public description = 'a * sin(b * pi * x + c) + d';
	public constants: { [index: string]: Constant } = {
		a: new Constant(.5, 0, 1, 'a'),
		b: new Constant(2, .25, 8.25, 'b'),
		c: new Constant(0, -1, 1, 'c'),
		d: new Constant(.5, 0, 2, 'd')
	};
	f(x: number, t: number = 0): number {
		const pi = Math.PI;
		const a = this.constants['a'].val;
		const b = this.constants['b'].val;
		const c = this.constants['c'].val;
		const d = this.constants['d'].val;
		const delta = this.constants['delta'].val;

		x = x + (delta * t);

		return a * Math.sin(b * pi * x + c ) + d;
	}
}
