import { Box } from './box';
import { Wave } from './wave';
import { Constant } from './constant';
import { Uniq } from './uniq';
export class Band extends Uniq {
	public domain: Box;
	public z0: number;
	public z1: number;
	public xOffset0: number;
	public xOffset1: number;
	// public xPerS: Constant = new Constant(.25, 0, 1, '{\\Delta x} \\over {s}');
}
