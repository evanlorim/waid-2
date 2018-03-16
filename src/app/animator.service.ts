import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/observable/timer';
import { empty } from 'rxjs/observable/empty';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class AnimatorService {
	private fps = 60;
	private isOn = false;
	private timer = timer(0, 1000 / this.fps);
	private counterSrc = new Subject();
	private empty$ = empty();
	public counter$ = this.counterSrc.asObservable()
		.pipe(switchMap(resume => resume ? this.timer : this.empty$));

	constructor() { }

	toggle() {
		this.isOn = ! this.isOn;
		this.counterSrc.next(this.isOn);
	}

}
