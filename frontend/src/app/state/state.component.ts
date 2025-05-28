import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-state',
  imports: [CommonModule, FormsModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  currentContent: string = 'Hello World!';
  lastSavedContent: string = 'Hello World!';
  isModified: boolean = false;

  onContentChange() {
    this.isModified = this.normalize(this.currentContent) !== this.normalize(this.lastSavedContent);
  }

  save() {
    if (this.isModified) {
      alert("Content has been saved successfully!");
      console.log("Saved: ", this.currentContent);

      this.lastSavedContent = this.currentContent;
      this.isModified = false;
    }
  }

  normalize(content: string): string {
    return content.trim();
  }
}
