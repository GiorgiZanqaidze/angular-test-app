import {Component, HostListener, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css'],
})
export class Child1Component {

  text!: string

  @HostListener("window:keydown", ["$event"])
  onMouseEnter(event: KeyboardEvent) {
    this.text += event.key

    if (this.text == "ControlAlt") {
      console.log(this.text)
    }

    this.text = ""

    console.log(event.key)

  }

  mouseMove() {
    console.log('gio2')
  }

}
