import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ColumnService } from './column.service';
import { AnimatorService } from './animator.service';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { DisplayComponent } from './display/display.component';
import { WaveComponent } from './wave/wave.component';
import { WaveGraphComponent } from './wave-graph/wave-graph.component';
import { ConstantComponent } from './constant/constant.component';


@NgModule({
	declarations: [
		AppComponent,
		EditorComponent,
		DisplayComponent,
		WaveComponent,
		WaveGraphComponent,
		ConstantComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		FlexLayoutModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatDividerModule,
		MatListModule,
		MatSliderModule,
		MatSelectModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatSlideToggleModule
	],
	exports: [
		MatToolbarModule,
		MatDividerModule,
		MatListModule,
		MatSliderModule,
		MatSelectModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
		MatSlideToggleModule
	],
	providers: [ColumnService, AnimatorService],
	bootstrap: [AppComponent]
})
export class AppModule { }
