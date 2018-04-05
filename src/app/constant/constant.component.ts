import { Component, Input } from '@angular/core';

import { Constant } from '../models/constant';
import { WaveService } from '../wave.service';

@Component({
	selector: 'app-constant',
	templateUrl: './constant.component.html',
	styleUrls: ['./constant.component.scss']
})
export class ConstantComponent {
	@Input() constant: Constant;
	constructor(private waveService: WaveService) { }

	onSliderChange() {
		this.waveService.updateConstant(this.constant);
	}

}
