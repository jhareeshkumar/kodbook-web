import { Component, input } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';

@Component({
  selector: 'app-top-loading-bar',
  imports: [ProgressBar],
  templateUrl: './top-loading-bar.html',
  styleUrl: './top-loading-bar.scss'
})
export class TopLoadingBar {
  value = input<number>(0);
  showValue = input<boolean>(false);
  mode = input<string>('indeterminate');
  unit = input<string>('%');
  color = input<string>('');
}
