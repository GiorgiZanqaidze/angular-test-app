import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {

  @Input() user: any

  changeText() {
    this.user.name = "Gaga"
    console.log(this.user)
  }

}


