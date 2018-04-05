import { TestBed, inject } from '@angular/core/testing';

import { WaveService } from './wave.service';

describe('WaveService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [WaveService]
		});
	});

	it('should be created', inject([WaveService], (service: WaveService) => {
		expect(service).toBeTruthy();
	}));
});
