import { Component, OnInit } from '@angular/core';

import { Column } from '../models/column';
import { ColumnService } from '../column.service';

@Component({
		selector: 'app-editor',
		templateUrl: './editor.component.html',
		styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
	column: Column;
	waveTypes: Array<string>;
	selectedWaveType: string;

		constructor(private columnService: ColumnService) { }

	getColumn(): void {
		this.columnService.column$.subscribe(column => this.column = column);
	}

	getWaveTypes(): void {
		this.columnService.getWaveTypes().subscribe(waveTypes => this.waveTypes = waveTypes);
	}

	onAddWave() {
		this.columnService.addWave(this.selectedWaveType);
	}
		ngOnInit() {
		this.getColumn();
		this.columnService.initialize();
		this.getWaveTypes();
		this.selectedWaveType = this.waveTypes[0];
	}
}
