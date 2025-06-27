import { Component, input } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-progress-bar',
  imports: [ProgressBarModule],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss'
})
export class ProgressBar {

  value = input<number>(0);
  showValue = input<boolean>(false);
  mode = input<string>('indeterminate');
  unit = input<string>('%');
  color = input<string>();
  height = input<string>('4px');
}
