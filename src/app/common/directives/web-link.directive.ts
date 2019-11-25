import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWebLink]'
})
export class WebLinkDirective implements AfterViewInit {

  @Input() appWebLink:any;

  constructor(private element: ElementRef) {
    console.log('directive loaded!', this.appWebLink);
  }

  ngAfterViewInit() {
    console.log('web link', this.element);
    this.element.nativeElement.onclick = () => {
      console.log('hacer llamada metrica');
      // e.preventDefault();
    };
  }

}
