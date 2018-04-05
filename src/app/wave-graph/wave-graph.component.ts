import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { map, range } from 'lodash';
import * as d3 from 'd3';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

import { WaveService } from '../wave.service';
import { Wave } from '../models/wave';
import { Point2D } from '../models/point';

@Component({
	selector: 'app-wave-graph',
	templateUrl: './wave-graph.component.html',
	styleUrls: ['./wave-graph.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class WaveGraphComponent implements OnInit, OnDestroy {
	@ViewChild('graph') private graphContainer: ElementRef;
	@Input() private wave: Wave;

	private transitionTime = 1000 / 30;
	private svg: any;
	private graph: any;
	private width: number;
	private height: number;
	private xScale: any;
	private yScale: any;
	private data: Array<Point2D>;
	private valueLine: any;
	private line: any;

	private isShifting: boolean;
	private shiftSub: Subscription;
	private waveSub: Subscription;
	private ngUnsubscribeShift: Subject<any>;
	private ngUnsubscribeWave: Subject<any>;

	constructor(private waveService: WaveService) { }

	ngOnInit() {
		this.createGraph();
		this.ngUnsubscribeWave = new Subject();
		this.waveSub = this.waveService.wave$
		.pipe(takeUntil(this.ngUnsubscribeWave))
		.subscribe(wave => {
			this.wave = wave;

			this.updateGraph();

			if (wave.isShifting && !this.isShifting) {
				this.startShift();
			} else if (!wave.isShifting && this.isShifting) {
				this.endShift();
			}
		});
	}

	ngOnDestroy() {
		console.log('i am doing it!');
		this.ngUnsubscribeWave.next();
		this.ngUnsubscribeWave.complete();
		this.ngUnsubscribeShift.next();
		this.ngUnsubscribeShift.complete();
	}

	startShift() {
		this.ngUnsubscribeShift = new Subject();
		this.shiftSub = this.waveService.shift$.pipe(takeUntil(this.ngUnsubscribeShift)).subscribe(n => {
			const xOffset = this.wave.delta.value * n;
			this.updateGraph(xOffset);
		});
		this.isShifting = true;
	}

	endShift() {
		this.ngUnsubscribeShift.next();
		this.ngUnsubscribeShift.complete();
		this.isShifting = false;
	}

	updateGraph(xOffset = 0) {
		this.updateScales(xOffset);
		this.updateValueLine();
		this.updateData(xOffset);
		this.updateLine();
	}

	createGraph() {
		this.initGraph();
		this.updateScales();
		this.updateValueLine();
		this.updateData();
		this.updateLine();
	}

	initGraph() {
		const element = this.graphContainer.nativeElement;
		this.width = element.offsetWidth;
		this.height = element.offsetHeight;

		this.svg = d3.select(element).append('svg')
			.attr('width', element.offsetWidth)
			.attr('height', element.offsetHeight)
			.classed('graph-svg', true);

		this.graph = this.svg.append('g')
			.attr('class', 'graph');

		this.graph.append('rect')
			.classed('background', true)
			.attr('width', this.width)
			.attr('height', this.height);
	}

	updateValueLine() {
		this.valueLine = d3.line<Point2D>()
			.x(d =>	this.xScale(d.x) )
			.y(d =>	this.yScale(d.y) );
	}

	updateScales(xOffset = 0) {
		if (!this.xScale) {
			this.xScale = d3.scaleLinear();
		}

		this.xScale.domain([this.wave.domain.xMin + xOffset, this.wave.domain.xMax + xOffset])
			.range([0, this.width]);

		if (!this.yScale) {
			this.yScale = d3.scaleLinear();
		}

		this.yScale.domain([this.wave.domain.yMin, this.wave.domain.yMax])
			.range([0, this.height]);
	}

	updateData(xOffset = 0) {
		const xVals = range(xOffset, this.wave.domain.xMax + this.wave.domain.xIncrement + xOffset, this.wave.domain.xIncrement);
		this.data = map(xVals, x => {
			const y = this.wave.f(x);
			return {x, y};
		});
	}

	updateLine() {
		if (!this.line) {
			this.line = this.graph.append('path')
				.data([this.data])
				.attr('d', this.valueLine)
				.classed('line', true);
		} else {
			this.line = this.graph.selectAll('path')
				.data([this.data])
				.attr('d', this.valueLine)
				.transition()
				.duration(this.transitionTime);
		}
	}

	deleteGraph() {
		const element = this.graphContainer.nativeElement;
		d3.select(element).selectAll('.graph-svg').remove();
	}
}

