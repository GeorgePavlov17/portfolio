import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Chart } from 'chart.js';
import { ChartService } from '../services/chart.service';

@Component( {
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
} )
export class SkillsComponent implements OnInit {
  @ViewChild( 'chart' ) chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  @HostListener( 'window:resize', ['$event'] )
  onResize( _event: Event ): void {
    this.chart?.resize();
  }

  skillsLabels = ['JavaScript', 'TypeScript', 'HTML', 'SCSS', 'Angular', 'Ionic', 'Git', 'Npm', 'Webpack', 'Swagger'];

  skillsValues = [88, 82, 92, 90, 95, 90, 89, 87, 75, 97];

  constructor( private chartService: ChartService ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.createChart();

    setTimeout( () => this.attachIconEvents(), 0 );
  }

  createChart() {
    if ( !this.chartRef ) return;

    if ( this.chart ) this.chart.destroy();

    const ctx = this.chartRef.nativeElement;
    this.chart = new Chart( ctx, this.chartService.createSkillsChart( ctx, this.skillsValues, this.skillsLabels ) as any );
  }

  attachIconEvents() {
    const icons = document.querySelectorAll( '.skill-card' );

    icons.forEach( icon => {
      const index = Number( icon.getAttribute( 'data-index' ) );

      icon.addEventListener( 'click', () => {
        this.chart?.tooltip?.setActiveElements(
          [{ datasetIndex: 0, index }],
          { x: 0, y: 0 }
        );
        this.chart?.update();
      } );

      icon.addEventListener( 'mouseenter', () => {
        this.chart?.tooltip?.setActiveElements(
          [{ datasetIndex: 0, index }],
          { x: 0, y: 0 }
        );
        this.chart?.update();
      } );

      icon.addEventListener( 'mouseleave', () => {
        this.chart?.tooltip?.setActiveElements( [], { x: 0, y: 0 } );
        this.chart?.update();
      } );
    } );
  }
}
