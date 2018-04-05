import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KatexModule } from 'ng-katex';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AnimatorService } from './animator.service';
import { AppComponent } from './app.component';
import { BandComponent } from './band/band.component';
import { BandGraphComponent } from './band-graph/band-graph.component';
import { ConstantComponent } from './constant/constant.component';
import { DesignService } from './design.service';
import { PatternEditorComponent } from './pattern-editor/pattern-editor.component';
import { PatternViewComponent } from './pattern-view/pattern-view.component';


@NgModule({
	declarations: [
		AppComponent,
		BandComponent,
		BandGraphComponent,
		ConstantComponent,
		PatternEditorComponent,
		PatternViewComponent,
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		FlexLayoutModule,
		FormsModule,
		KatexModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatToolbarModule,
	],
	exports: [
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatToolbarModule,
	],
	providers: [AnimatorService, DesignService],
	bootstrap: [AppComponent]
})
export class AppModule { }
