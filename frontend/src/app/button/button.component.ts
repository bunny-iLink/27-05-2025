import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  clickInputColor = '';
  clickButtonColor = 'Green';

  liveInputColor = '';

  applyClickColor() {
    this.clickButtonColor = this.clickInputColor || 'initial';
  }
}
