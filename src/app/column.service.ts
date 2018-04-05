import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { keys, findIndex, remove } from 'lodash';

import { Constant } from './models/constant';
import { Column } from './models/column';
import { Wave } from './models/wave';
import waveTypes from './models/waves';

@Injectable()
export class ColumnService {
	private waveTypes = waveTypes;
	private currentColumn: Column;
	private columnSource = new Subject<Column>();
	public column$ = this.columnSource.asObservable();

	initialize(): void {
		this.currentColumn = new Column();
		this.columnSource.next(this.currentColumn);
	}

	getWaveTypes(): Observable<string[]> {
		return of(keys(this.waveTypes));
	}

	addWave(waveType: string): void {
		const WaveType = this.waveTypes[waveType];
		const wave = new WaveType();
		this.currentColumn.pushWave(wave);
		this.columnSource.next(this.currentColumn);
	}

	updateWave(wave: Wave): void {
		const index = findIndex(this.currentColumn.waves, {id: wave.id});
		this.currentColumn[index] = wave;
	}

	deleteWave(wave: Wave): void {
		remove(this.currentColumn.waves, w => w.id === wave.id);
	}
}
