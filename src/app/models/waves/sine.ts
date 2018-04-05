import { Wave } from '../wave';
import { Constant } from '../constant';
import { uniqueId } from 'lodash';
export class SineWave extends Wave {
	public name = 'Sine Wave';
	public description = 'a * sin(b * pi * x + c) + d';
	public constants = {
		a: new Constant(.5, 0, 1, 'a', 20),
		b: new Constant(2, .25, 8.25, 'b', 20),
		c: new Constant(0, -1, 1, 'c', 20),
		d: new Constant(.5, 0, 2, 'd', 20)
	};
	public xShift = .05;
	public id = uniqueId('sine_wave_');
	f(x: number): number {
		return this.constants['a'].value * Math.sin(this.constants['b'].value * Math.PI * x + this.constants['c'].value)
		+ this.constants['d'].value;
	}
}
