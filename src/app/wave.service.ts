import { Injectable } from '@angular/core';
import { cloneDeep, assign } from 'lodash';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

import { Wave } from './models/wave';
import { ColumnService } from './column.service';
import { Constant } from './models/constant';

@Injectable()
export class WaveService {
	private originalWave: Wave;
	private currentWave: Wave;

	private waveSource = new Subject<Wave>();
	public wave$ = this.waveSource.asObservable();

	private fps = 60;
	private emitEvery = 1000 / this.fps;

	public shift$ = interval(this.emitEvery).pipe(map(n => n / this.fps));

	constructor(private columnService: ColumnService) {
	}

	setWave(wave: Wave) {
		this.originalWave = wave;
		this.currentWave = this.originalWave.constructor();
		assign(this.currentWave, cloneDeep(this.originalWave));
		this.waveSource.next(this.currentWave);
	}

	updateConstant(constant: Constant): void {
		this.currentWave.updateConstant(constant);
		this.waveSource.next(this.currentWave);
	}

	restoreWave(): void {
		this.currentWave = this.originalWave;
	}

	updateWave(): void {
		this.originalWave = this.currentWave;
		this.columnService.updateWave(this.currentWave);
	}

	deleteWave(): void {
		this.columnService.deleteWave(this.originalWave);
	}

	toggleIsShifting(): void {
		this.currentWave.isShifting = ! this.currentWave.isShifting;
		this.waveSource.next(this.currentWave);
	}
}
