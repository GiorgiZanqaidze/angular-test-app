
import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";



@Directive({
  selector: "[appGreenText]"
})
export class greenTextDirective implements OnInit{

  @Input() set condition(value: string) {
    console.log('gauge')
    this.renderer.setStyle(this.elementRef, "color", value)
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  ngOnInit() {
    // this.elementRef.nativeElement.style.color = "white"
  }

}
