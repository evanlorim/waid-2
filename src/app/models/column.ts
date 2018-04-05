import { Rectangle } from './rectangle';
import { Wave } from './wave';
import { uniqueId, findIndex } from 'lodash';
export class Column {
	public domain: Rectangle = new Rectangle(0, 1, 0, 1, 200);
	public range: Rectangle = new Rectangle(0, 100, 0, 100, 100);
	public waves: Array<Wave> = [];
	public id = uniqueId('column_');
	pushWave(wave: Wave) {
		wave.domain = this.domain;
		this.waves.push(wave);
	}
	updateWave(wave: Wave) {
		const index = findIndex(this.waves, {id: wave.id});
		this.waves[index] = wave;
	}
}
