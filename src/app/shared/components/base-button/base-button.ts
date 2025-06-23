import { Component, input } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'app-base-button',
  imports: [ButtonModule],
  templateUrl: './base-button.html',
  styleUrl: './base-button.scss'
})
export class BaseButton {
 
  type = input<string>('submit');
  raised = input<boolean>(true);
  variant = input<any>(null)
  label = input<any>('Submit');
  fluid = input<boolean>(false);
  severity= input<ButtonSeverity>('primary');
  icon = input<string>();
  
}
