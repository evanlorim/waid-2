import { Component, OnInit, Input } from '@angular/core';
import { keys } from 'lodash';

import { WaveService } from '../wave.service';
import { Wave } from '../models/wave';

@Component({
	selector: 'app-wave',
	templateUrl: './wave.component.html',
	styleUrls: ['./wave.component.scss'],
	providers: [ WaveService ]
})
export class WaveComponent implements OnInit {
	keys: Array<String>;
	@Input() wave: Wave;

	constructor(private waveService: WaveService) { }

	getWave(): void {
		this.waveService.wave$.subscribe( wave => this.wave = wave );
	}
	setWave(): void {
		this.waveService.setWave(this.wave);
	}
	ngOnInit() {
		this.getWave();
		this.setWave();
		this.keys = keys(this.wave.constants);
	}
	onToggleIsShifting() {
		this.waveService.toggleIsShifting();
	}

	onDelete() {
		this.waveService.deleteWave();
	}
	onSave() {
		this.waveService.updateWave();
	}
}
