import { Wave } from './wave';
import { Band } from './band';
import { Constant } from './constant';
import { Box } from './box';
import { Zs } from './zs';
export class Pattern {
	public zs: Zs;
	public waves: Array<Wave> = [];
	public bands: Array<Band> = [];

	public nBands = new Constant(10, 1, 20, '\\n_bands');
	public bandHeight = new Constant(.5, 0, 1, '\\band_h');
	public gapHeight = new Constant(.5, 0, 1, '\\gap_h');

	public domain = new Box(0, 1, 0, this.nBands.val * (this.bandHeight.val + this.gapHeight.val), 200);
	public range = new Box(0, 100, 0, 540, 200);

	y(z: number): number {
		if ( (z >= 0) && (z <= 1) ) {
			const y0 = this.domain.yMax - this.domain.yMin;
			const y1 = y0 * z;
			return y1 + this.domain.yMin;
		} else {
			return undefined;
		}
	}
	z(y: number): number {
		if ( ( y >= this.domain.yMin ) && ( y <= this.domain.yMax ) ) {
			const y0 = this.domain.yMax - this.domain.yMin;
			const y1 = y - this.domain.yMin;
			return y1 / y0;
		} else {
			return undefined;
		}
	}
	f(x: number, y: number): number {
		return 0;
	}
	xPerS(y: number) { return 0; }
}
