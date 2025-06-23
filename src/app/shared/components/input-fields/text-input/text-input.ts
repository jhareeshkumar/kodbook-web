import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-text-input',
  imports: [
    InputTextModule,
    FloatLabelModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  label = input<string>();

  control = input<FormControl>(new FormControl());

  fieldType = input<string>('text');
}
