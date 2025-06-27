import { Component, inject } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../../core/services/toast/toast.service';

@Component({
  selector: 'app-toast',
  imports: [ToastModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {

  toastBreakpoints = {
    '480px': { width: '95%', left: 'auto', right: 'auto' },
  };
}
