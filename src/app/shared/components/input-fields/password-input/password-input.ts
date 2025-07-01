import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-input',
  imports: [
    PasswordModule,
    FloatLabelModule,
    MessageModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabel,
  ],
  templateUrl: './password-input.html',
  styleUrl: './password-input.scss',
})
export class PasswordInput {
  label = input<string>('Password');
  fluid = input<boolean>(true);
  toggleMask = input<boolean>(true);
  showClear = input<boolean>(true);
  feedback = input<boolean>(false);
  control = input.required<FormControl>();
  icon = input<string>();
  autocomplete = input<string>('');
}
