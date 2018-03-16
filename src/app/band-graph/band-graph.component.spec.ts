import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandGraphComponent } from './band-graph.component';

describe('BandGraphComponent', () => {
	let component: BandGraphComponent;
	let fixture: ComponentFixture<BandGraphComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BandGraphComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BandGraphComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
