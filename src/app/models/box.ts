import { assign } from 'lodash';
export class Box {
	private _xMin: number;
	private _xMax: number;
	private _yMin: number;
	private _yMax: number;
	private _nPoints: number;
	private _xIncrement: number;
	constructor(xMin, xMax, yMin, yMax, nPoints) {
		assign(this, {_xmin: xMin, _xMax: xMax, _yMin: yMin, _yMax: yMax, _nPoints: nPoints});
		this._xIncrement = ( this._xMax - this._xMin ) / this._nPoints;
	}
	get xMin(): number { return this._xMin; }
	get xMax(): number { return this._xMax; }
	get yMin(): number { return this._yMin; }
	get yMax(): number { return this._yMax; }
	get xIncrement(): number {
		return this._xIncrement;
	}
}
