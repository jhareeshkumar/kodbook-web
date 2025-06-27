import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'success',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }

  showError(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'error',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }

  showInfo(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'info',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }
  showWarn(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'warn',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }
  showContrast(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'contrast',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }

  showSecondary(key: string, summary: string, detail: string, sticky: boolean) {
    this.messageService.add({
      severity: 'secondary',
      key: key,
      summary: summary,
      detail: detail,
      sticky: sticky
    })
  }
}
