import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ChartService } from '../services/chart.service';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TranslateModule,
      HeaderComponent,
      FooterComponent
    ]
})
export class SkillsComponent implements OnInit {
  @ViewChild('chart') chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  @HostListener( 'window:resize', ['$event'])
  onResize(_event: Event): void {
    this.chart?.resize();
  }

    skillsLabels = [ 'Angular', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'SCSS' ];
  
    skillsValues = [ 92, 80, 88, 85, 95, 85 ];

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {

  }

   ngAfterViewInit(): void {
    this.createChart();
  } 

  createChart() {
    if(!this.chartRef) return;

    if(this.chart) this.chart.destroy();

    const ctx = this.chartRef.nativeElement;
    this.chart = new Chart(ctx, this.chartService.createSkillsChart(ctx, this.skillsValues, this.skillsLabels) as any); 
  }
}
