import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import { map } from 'rxjs/operators';

@Injectable()
export class AnimatorService {
	private fps = 5;
	private emitEvery = 1000 / this.fps;
	unsubscribe: Subject<any>;
	shiftSource = new Subject<number>();
	shift$ = this.shiftSource.asObservable();
	constructor() { }
	startShift() {
		this.shiftSource.next()
	}
}
