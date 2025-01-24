import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  constructor(
    @Inject(Injector) private injector: any,
    @Inject(ComponentFactoryResolver) private cfr: any,
    private router: Router) { }

  search() {
    this.router.navigate(['flights/random'])
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    this.viewContainer?.createComponent(factory, undefined, this.injector);
  }


}
