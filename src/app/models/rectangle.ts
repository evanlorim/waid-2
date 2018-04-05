import { assign } from 'lodash';
export class Rectangle {
	xMin: number;
	xMax: number;
	yMin: number;
	yMax: number;
	private _nPoints: number;
	private _xIncrement: number;
	constructor(xMin, xMax, yMin, yMax, nPoints) {
		assign(this, {xMin, xMax, yMin, yMax, _nPoints: nPoints});
		this._xIncrement = ( this.xMax - this.xMin ) / this._nPoints;
	}
	set nPoints(nPoints: number) {
		this._nPoints = nPoints;
		this._xIncrement = ( this.xMax - this.xMin ) / this._nPoints;
	}
	get nPoints(): number {
		return this._nPoints;
	}
	get xIncrement(): number {
		return this._xIncrement;
	}
}
