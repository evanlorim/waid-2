import OpenSimplexNoise from 'open-simplex-noise';
import { Wave } from '../wave';
import { Constant } from '../constant';
import { uniqueId } from 'lodash';
export class SimplexWave extends Wave {
	public seed: number = Math.random();
	public noise: OpenSimplexNoise = new OpenSimplexNoise(this.seed);
	public name = 'Simplex Wave';
	public description = 'a * Simplex2D(x * b, x + c) + d';
	public constants = {
		a: new Constant(.5, 0, 1, 'a', 20),
		b: new Constant(2, 0, 20, 'b', 20),
		c: new Constant(0, 0, 1000, 'c', 20),
		d: new Constant(.5, 0, 1, 'd', 20)
	};
	id = uniqueId('simplex_wave_');
	f(x: number): number {
		x = x * this.constants['b'].value;
		return this.constants['a'].value * this.noise.noise2D(x, x + this.constants['c'].value)
		+ this.constants['d'].value;
	}
}
