import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-email-card',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './email-card.component.html',
  styleUrl: './email-card.component.less'
})
export class EmailCardComponent {
  email = input<string | null>();

  visible = signal(true);

  constructor() {
    effect(() => {
      if (this.email()) {
        this.visible.set(true);
      }
    });
  }

  hide() {
    this.visible.set(false);
  }
}

