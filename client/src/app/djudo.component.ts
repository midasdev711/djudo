import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'djudo-root',
  templateUrl: './djudo.component.html',
  styleUrls: ['./djudo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';

  constructor() { }
}
