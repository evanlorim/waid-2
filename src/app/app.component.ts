import { Component, OnInit } from '@angular/core';
import { AnimatorService } from './animator.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Becoming Bands';
	author = 'Evan Lori Mahone';
	constructor(private animatorService: AnimatorService) {}
	ngOnInit() {
	}
}
