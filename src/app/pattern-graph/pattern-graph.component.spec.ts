import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternGraphComponent } from './pattern-graph.component';

describe('PatternGraphComponent', () => {
	let component: PatternGraphComponent;
	let fixture: ComponentFixture<PatternGraphComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PatternGraphComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PatternGraphComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
