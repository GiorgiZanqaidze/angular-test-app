import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red'
  }

}
