import { Injectable } from '@angular/core';
import { keys } from 'lodash';
import waveTypes from './models/waves';
@Injectable()
export class PatternService {
	private _waveTypes = waveTypes;
	constructor() { }
	get waveTypeKeys() { return keys(this._waveTypes); }

}
