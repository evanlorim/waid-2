import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pattern-editor',
	templateUrl: './pattern-editor.component.html',
	styleUrls: ['./pattern-editor.component.scss']
})
export class PatternEditorComponent implements OnInit {
	public equation = '{\\Delta x} \\over {s}';
	constructor() { }

	ngOnInit() {
	}

}
