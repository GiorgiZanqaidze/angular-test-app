import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css'],
})
export class Child1Component implements OnInit{

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  @ViewChild('giorgi') gio!: ViewChild

  ngOnInit() {
    console.log(this.gio)
  }

}
