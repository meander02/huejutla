import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'], // Cambia 'styleUrl' a 'styleUrls'
  encapsulation: ViewEncapsulation.None
})
export class HomeView implements AfterViewInit {
  @ViewChild('splineViewer')
  splineViewer!: ElementRef;

  ngAfterViewInit() {
    // Accede al elemento 'spline-viewer' utilizando la referencia de elemento
    const splineViewerElement = this.splineViewer.nativeElement;

    // Configura cualquier propiedad adicional si es necesario
    splineViewerElement.url = 'https://prod.spline.design/ktrBw4hNvW5-jlyr/scene.splinecode';
  }
}
